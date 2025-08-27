const { OpenAI } = require("openai");
const fs = require("fs");
const { createObjectCsvWriter } = require("csv-writer");
const axios = require("axios");

// API configuration
const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:
    "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", // Replace with your actual API key
});

// Logical questions for testing
const questions = [
  "My father only has one child. So who is my father's son's older brother?",
];

// Temperature values to test
const temperatures = [0.0, 1.0];

// CSV configuration
const csvWriter = createObjectCsvWriter({
  path: "deepseek_temperature_experiment.csv",
  header: [
    { id: "question", title: "Question" },
    { id: "temperature", title: "Temperature" },
    { id: "response", title: "Response" },
    { id: "responseTime", title: "Response Time (s)" },
  ],
});

(async () => {
  let results = [];

  for (const question of questions) {
    for (const temp of temperatures) {
      try {
        const startTime = Date.now();

        const response = await axios.post(
          "https://openrouter.ai/api/v1/chat/completions",
          {
            model: "deepseek/deepseek-v3-base:free",
            temperature: temp,
            messages: [{ role: "user", content: question }],
          },
          {
            headers: {
              Authorization: `Bearer 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`, // Replace with your actual API key
              "Content-Type": "application/json",
            },
          }
        );

        const responseTime = (Date.now() - startTime) / 1000;
        const responseContent = response.data.choices[0].message.content;

        results.push({
          question,
          temperature: temp,
          response: responseContent,
          responseTime,
        });

        console.log(
          `Q: ${question}\nT: ${temp} -> Response: ${responseContent} (Time: ${responseTime}s)\n`
        );

        // Delay to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(
          `Error processing question '${question}' at temp ${temp}:`,
          error
        );
        results.push({
          question,
          temperature: temp,
          response: "ERROR: " + error.message,
          responseTime: 0,
        });
      }
    }
  }

  // Save results to CSV
  await csvWriter.writeRecords(results);
  console.log(
    "Experiment completed! Results saved to deepseek_temperature_experiment.csv"
  );
})();
