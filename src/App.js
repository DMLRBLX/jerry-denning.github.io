import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Gamepad2, Code, Megaphone, User } from 'lucide-react';

// Header Component
const Header = ({ onNavigate }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-900 to-indigo-900 bg-opacity-80 backdrop-blur-md shadow-lg p-4 rounded-b-xl">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <Gamepad2 className="text-purple-300 w-8 h-8" />
          <h1 className="text-2xl font-bold text-white font-inter">
            <span className="text-purple-300">JerryDenning</span>.dev
          </h1>
        </div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className="text-white hover:text-purple-300 transition-colors duration-300 text-lg font-medium relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

// Hero Section Component
const HeroSection = ({ onNavigate }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-950 to-purple-950">
      {/* Background Particles/Shapes - Example of a simple CSS animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob top-0 left-0"></div>
        <div className="absolute w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 top-0 right-0"></div>
        <div className="absolute w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 bottom-0 left-1/4"></div>
      </div>

      <div className="relative z-10 p-8 bg-black bg-opacity-50 rounded-2xl shadow-2xl max-w-4xl mx-auto border border-purple-700">
        <h2 className="text-6xl font-extrabold text-white mb-6 leading-tight font-inter">
          Hi, I'm <span className="text-purple-400">Jeremiah Denning (Jerry)</span>
        </h2>
        <p className="text-3xl text-gray-300 mb-8 font-light font-inter">
          A <span className="text-indigo-300 font-semibold">Game Developer</span> crafting immersive worlds and engaging experiences.
        </p>
        <button
          onClick={() => onNavigate('projects')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
        >
          View My Work <Code className="inline-block ml-2 w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white font-inter">
      <div className="container mx-auto px-8 max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-12 text-purple-400">
          About Me <User className="inline-block ml-3 w-10 h-10" />
        </h2>
        <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-700">
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            I'm a passionate game developer with a knack for bringing digital worlds to life. My journey began with a fascination for interactive storytelling and complex systems, leading me to explore various aspects of game design, programming, and art.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            With expertise in <span className="text-indigo-400 font-semibold">Unity, C#, Unreal Engine, and C++</span>, I thrive on tackling challenging problems and optimizing performance to deliver smooth, engaging gameplay. I believe in the power of collaboration and enjoy working in teams to build something truly remarkable.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            When I'm not coding, you can find me exploring new game genres, contributing to open-source projects, or diving deep into game development communities to learn and share knowledge. I'm always eager to take on new challenges and push the boundaries of what's possible in interactive entertainment.
          </p>
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, technologies, imageUrl, projectUrl }) => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700">
      <img
        src={imageUrl || "https://placehold.co/600x400/333333/FFFFFF?text=Project+Image"}
        alt={title}
        className="w-full h-56 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/333333/FFFFFF?text=Image+Not+Found"; }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-4 text-base">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-purple-700 text-purple-100 text-xs font-semibold px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View Project <Code className="ml-2 w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      title: "Galactic Explorer",
      description: "A 3D space exploration game featuring procedural generation and real-time combat.",
      technologies: ["Unity", "C#", "Blender"],
      imageUrl: "https://placehold.co/600x400/4A235A/FFFFFF?text=Galactic+Explorer",
      projectUrl: "#", // Replace with actual project URL
    },
    {
      title: "Pixel Dungeon Crawler",
      description: "A retro-style 2D dungeon crawler with challenging puzzles and unique enemy AI.",
      technologies: ["Godot", "GDScript", "Aseprite"],
      imageUrl: "https://placehold.co/600x400/2C3E50/FFFFFF?text=Pixel+Dungeon",
      projectUrl: "#", // Replace with actual project URL
    },
    {
      title: "VR Puzzle Adventure",
      description: "An immersive virtual reality puzzle game designed for Oculus Quest.",
      technologies: ["Unreal Engine", "C++", "VR Development"],
      imageUrl: "https://placehold.co/600x400/1ABC9C/FFFFFF?text=VR+Adventure",
      projectUrl: "#", // Replace with actual project URL
    },
    {
      title: "Rhythm Runner",
      description: "A fast-paced rhythm-based endless runner with dynamic music integration.",
      technologies: ["Unity", "C#", "FMOD"],
      imageUrl: "https://placehold.co/600x400/E74C3C/FFFFFF?text=Rhythm+Runner",
      projectUrl: "#", // Replace with actual project URL
    },
    {
      title: "Multiplayer Arena Brawler",
      description: "A real-time multiplayer brawler with custom networking solutions.",
      technologies: ["Unity", "C#", "Photon PUN"],
      imageUrl: "https://placehold.co/600x400/9B59B6/FFFFFF?text=Arena+Brawler",
      projectUrl: "#", // Replace with actual project URL
    },
    {
      title: "Procedural City Builder",
      description: "A simulation game where players build and manage procedurally generated cities.",
      technologies: ["Unity", "C#", "Procedural Generation"],
      imageUrl: "https://placehold.co/600x400/34495E/FFFFFF?text=City+Builder",
      projectUrl: "#", // Replace with actual project URL
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950 text-white font-inter">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-12 text-indigo-400">
          My Projects <Gamepad2 className="inline-block ml-3 w-10 h-10" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white font-inter">
      <div className="container mx-auto px-8 max-w-3xl">
        <h2 className="text-5xl font-bold text-center mb-12 text-purple-400">
          Get in Touch <Megaphone className="inline-block ml-3 w-10 h-10" />
        </h2>
        <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-700 text-center">
          <p className="text-lg leading-relaxed mb-8 text-gray-300">
            Have a project in mind, a question, or just want to say hello? Feel free to reach out!
          </p>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-6">
              <a
                href="mailto:jerrydenning@u.boisestate.edu"
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <Mail className="mr-3 w-6 h-6" /> School Email
              </a><a
                href="mailto:dmlrblxmstr@gmail.com"
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <Mail className="mr-3 w-6 h-6" /> Personal Email
              </a>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/dmlrblx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-10 h-10" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-10 h-10" />
              </a>
              {/* Add more social links as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-950 py-8 text-center text-gray-500 text-sm font-inter border-t border-gray-800">
      <div className="container mx-auto px-4">
        <p className="mt-2">Designed and Developed with GIMM ❤️</p>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  // Function to smoothly scroll to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 font-inter">
      <Header onNavigate={scrollToSection} />
      <main>
        <HeroSection onNavigate={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
