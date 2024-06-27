import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function ReactCarousel({ images, subtittle }) {
  return (
    <div className="relative p-0 rounded-sm shadow-lg h-96">
      {/* <h2 className="text-2xl font-bold mb-0">Some UI & Code Snippets</h2>  */}
      <h2 className="text-lg font-semibold md:text-sm lg:text-lg xl:text-xl">
        {subtittle}
      </h2>
      <Carousel
        showThumbs={false}
        showStatus={true}
        infiniteLoop={false}
        autoPlay={false}
        interval={5000}
        stopOnHover={false}
        className="custom-carousel"
      >
        {images.map((image, index) => (
          <div key={index} className="relative h-96">
            <img
              src={image.src}
              alt={image.alt}
              className="carousel-image object-contain rounded-lg h-full w-full"
            />
            {image.caption && (
              <p className="legend bg-black text-white p-2 rounded-md">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ReactCarousel;
