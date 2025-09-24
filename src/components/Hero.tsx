import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent animate-glow-pulse">
              Chandini Pentapati
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            IT Student & AI Enthusiast
          </p>
          
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            4th Year Information Technology student at Andhra University College of Engineering 
            with a passion for artificial intelligence and creating innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="btn-hero px-8 py-6 text-lg font-semibold rounded-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/chand-chandini" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6 text-white" />
            </a>
            
            <a 
              href="https://linkedin.com/in/chandini-pentapati" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6 text-white" />
            </a>
            
            <a 
              href="mailto:chandinipentapati123@gmail.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              aria-label="Send Email"
            >
              <Mail className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-8 w-8 text-white/70 hover:text-white transition-colors" />
        </button>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-gold/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
    </section>
  );
};

export default Hero;