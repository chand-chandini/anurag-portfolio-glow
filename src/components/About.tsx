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
      description: "4th Year Information Technology, Andhra University College of Engineering",
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "Python, HTML, CSS, JavaScript, Git, React, Problem Solving",
      color: "text-accent"
    },
    {
      icon: Target,
      title: "Career Goals",
      description: "Seeking software engineering roles at leading tech companies",
      color: "text-success"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Contributing to open-source projects and building innovative solutions",
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
              I'm a passionate web developer and Python programmer currently in my final year at 
              Andhra University College of Engineering. With a strong foundation in modern web technologies 
              and a love for problem-solving, I'm eager to contribute to innovative projects and make 
              a meaningful impact in the tech industry.
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
                  My journey in technology began with curiosity and has evolved into a passion for creating 
                  digital solutions that make a difference. Through my studies at Andhra University, hands-on 
                  projects, and continuous learning, I've developed strong technical skills and a collaborative 
                  mindset that drives me to excel in team environments and tackle complex challenges.
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