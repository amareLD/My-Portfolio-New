import React from 'react';
import { Github, ExternalLink, Instagram, Facebook, MessageCircle, Linkedin, Music } from 'lucide-react';

function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-purple-400" },
    { icon: ExternalLink, href: "#", label: "ArtStation", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Music, href: "#", label: "TikTok", color: "hover:text-red-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: MessageCircle, href: "#", label: "Discord", color: "hover:text-indigo-400" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-gray-950 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Main content */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-600 to-gray-400 bg-clip-text text-transparent  mb-4">
            Let's Connect
          </h3>
          <p className="text-gray-200 max-w-md mx-auto">
            Follow my journey and let's create something amazing together
          </p>
        </div>

        {/* Social links */}
        <div className="flex justify-center items-center gap-6 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className={`group relative p-4 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 hover:border-gray-600/50 ${social.color}`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
                title={social.label}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                
                <Icon size={24} className="relative z-10 text-gray-300 group-hover:text-current transition-colors duration-300" />
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {social.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <span>Available for freelance work</span>
          </div>
          <div className="text-center">
            <p>&copy; 2024 LahiruD. Crafted with passion.</p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span>Made with</span>
            <span className="text-red-400 animate-pulse">♥</span>
            <span>using React</span>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;