import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Target, Heart, Code, ExternalLink } from 'lucide-react';
import chandiniPhoto from '@/assets/chandini-photo.jpg';

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
          
          {/* Photo and HackerRank Section */}
          <div className="mt-16 flex flex-col lg:flex-row items-center gap-12">
            <div className={`lg:w-1/2 transition-all duration-700 ${isVisible ? 'animate-slide-in-left' : ''}`}>
              <Card className="card-glass">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    My Journey
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    My journey in technology began with curiosity and has evolved through participating 
                    in national hackathons like Build Bharath AI, where I developed innovative solutions 
                    to showcase India's cultural heritage. With hands-on experience from internships 
                    and continuous learning, I'm excited to contribute to key projects in the software industry.
                  </p>
                  
                  <div className="mb-6 flex flex-wrap gap-3">
                    {['Team Collaboration', 'Problem Solving', 'Cultural Awareness', 'Continuous Learning'].map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 bg-gradient-accent text-accent-foreground rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* HackerRank Profile Link */}
                  <Button 
                    variant="outline" 
                    className="w-fit"
                    onClick={() => window.open('https://www.hackerrank.com/profile/chandinipentapa1', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View HackerRank Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Profile Photo */}
            <div className={`lg:w-1/2 flex justify-center transition-all duration-700 ${isVisible ? 'animate-slide-in-right' : ''}`}>
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-accent/20 shadow-elegant">
                  <img 
                    src={chandiniPhoto} 
                    alt="Chandini Pentapati - IT Student at Andhra University College of Engineering" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-hero rounded-full blur-xl opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;