import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, FileText, Users, Calendar, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const achievements = [
    {
      type: "hackathon",
      title: "Smart India Hackathon 2023",
      description: "Finalist in the Smart India Hackathon for developing an innovative solution to improve rural healthcare accessibility using IoT and mobile technology.",
      date: "October 2023",
      status: "Finalist",
      icon: Trophy,
      color: "text-gold",
      bgColor: "bg-gold/10"
    },
    {
      type: "certification",
      title: "Python for Everybody Specialization",
      description: "Completed comprehensive Python programming specialization covering data structures, web scraping, databases, and data visualization.",
      date: "August 2023",
      status: "Completed",
      icon: FileText,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      type: "competition",
      title: "College Coding Contest Winner",
      description: "First place in inter-college coding competition solving complex algorithmic problems and demonstrating problem-solving skills.",
      date: "June 2023",
      status: "Winner",
      icon: Award,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      type: "project",
      title: "Open Source Contributor",
      description: "Active contributor to open-source projects with multiple merged pull requests in React component libraries and Python utilities.",
      date: "Ongoing",
      status: "Active",
      icon: Users,
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  const certifications = [
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "September 2023",
      credential: "fcc-js-2023",
      verified: true
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp", 
      date: "July 2023",
      credential: "fcc-rwd-2023",
      verified: true
    },
    {
      name: "Git Version Control",
      issuer: "Coursera",
      date: "May 2023",
      credential: "coursera-git-2023",
      verified: true
    },
    {
      name: "Database Fundamentals",
      issuer: "Andhra University",
      date: "April 2023",
      credential: "au-db-2023",
      verified: true
    }
  ];

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

  return (
    <section id="achievements" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Achievements & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-success mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Recognition of academic excellence, technical skills, and contributions to the developer community
            </p>
          </div>

          {/* Major Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className={`card-elevated hover:shadow-elegant transition-all duration-700 ${
                  isVisible ? 'animate-slide-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${achievement.bgColor}`}>
                        <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-foreground mb-1">
                          {achievement.title}
                        </CardTitle>
                        <div className="flex items-center space-x-3">
                          <Badge 
                            className={`${
                              achievement.status === 'Winner' || achievement.status === 'Finalist' 
                                ? 'bg-gold text-gold-foreground' 
                                : achievement.status === 'Active'
                                ? 'bg-success text-success-foreground'
                                : 'bg-primary text-primary-foreground'
                            }`}
                          >
                            {achievement.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {achievement.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Certifications & Courses
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.name}
                  className={`card-glass transition-all duration-500 hover:shadow-card ${
                    isVisible ? 'animate-slide-in-left' : ''
                  }`}
                  style={{ animationDelay: `${(index + 4) * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-sm mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          Issued by {cert.issuer}
                        </p>
                        <div className="flex items-center space-x-3">
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {cert.date}
                          </span>
                          {cert.verified && (
                            <Badge variant="outline" className="text-xs">
                              ✓ Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                      Credential ID: {cert.credential}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Performance */}
          <div className="mt-16 text-center">
            <Card className="card-glass max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Academic Excellence
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent mb-1">8.2</div>
                    <div className="text-sm text-muted-foreground">Current CGPA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gold mb-1">5+</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;