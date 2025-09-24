import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Target, Heart, Code } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "4th Year Information Technology, Andhra University College of Engineering (CGPA: 8.75)",
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "C Programming, Python, SQL, HTML/CSS, JavaScript, Artificial Intelligence",
      color: "text-accent"
    },
    {
      icon: Target,
      title: "Career Goals",
      description: "Seeking software engineering roles and contributing to key projects in AI",
      color: "text-success"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Building innovative solutions and showcasing India's cultural heritage through technology",
      color: "text-gold"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              I'm Chandini Pentapati, a passionate 4th-year Information Technology student at 
              Andhra University College of Engineering with a CGPA of 8.75. Through internships 
              in C++ and Artificial Intelligence, I've gained hands-on experience and developed 
              a strong foundation in programming and AI technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className={`card-elevated hover:shadow-elegant transition-all duration-500 ${
                  isVisible ? 'animate-slide-in-left' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-surface to-card ${item.color}`}>
                      <item.icon className="h-8 w-8" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Card className="card-glass max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  My Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  My journey in technology began with curiosity and has evolved through participating 
                  in national hackathons like Build Bharath AI, where I developed innovative solutions 
                  to showcase India's cultural heritage. With hands-on experience from internships 
                  and continuous learning, I'm excited to contribute to key projects in the software industry.
                </p>
                
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {['Team Collaboration', 'Problem Solving', 'Cultural Awareness', 'Continuous Learning'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-gradient-accent text-accent-foreground rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;