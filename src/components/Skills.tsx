import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C Programming", level: 85, color: "bg-gradient-to-r from-blue-500 to-blue-600" },
        { name: "Python", level: 80, color: "bg-gradient-to-r from-green-500 to-green-600" },
        { name: "JavaScript", level: 75, color: "bg-gradient-to-r from-yellow-500 to-yellow-600" },
        { name: "SQL", level: 75, color: "bg-gradient-to-r from-purple-500 to-purple-600" }
      ]
    },
    {
      title: "Web Technologies",
      icon: "🌐",
      skills: [
        { name: "HTML/CSS", level: 85, color: "bg-gradient-accent" },
        { name: "React", level: 70, color: "bg-gradient-to-r from-cyan-500 to-cyan-600" },
        { name: "Tailwind CSS", level: 75, color: "bg-gradient-to-r from-teal-500 to-teal-600" },
        { name: "Responsive Design", level: 80, color: "bg-gradient-to-r from-pink-500 to-pink-600" }
      ]
    },
    {
      title: "AI & Tools",
      icon: "🤖",
      skills: [
        { name: "Artificial Intelligence", level: 70, color: "bg-gradient-success" },
        { name: "Machine Learning", level: 65, color: "bg-gradient-to-r from-red-500 to-red-600" },
        { name: "Git & GitHub", level: 75, color: "bg-gradient-to-r from-orange-500 to-orange-600" },
        { name: "VS Code", level: 85, color: "bg-gradient-to-r from-blue-600 to-blue-700" }
      ]
    }
  ];

  const techStack = [
    { name: "C Programming", icon: "💻", description: "Strong foundation in programming fundamentals and algorithms" },
    { name: "Python", icon: "🐍", description: "AI development, data analysis, and backend programming" },
    { name: "JavaScript", icon: "🟨", description: "Frontend development and interactive web applications" },
    { name: "Artificial Intelligence", icon: "🤖", description: "Machine learning models and AI applications" },
    { name: "HTML/CSS", icon: "🎨", description: "Semantic markup, responsive design, modern layouts" },
    { name: "SQL", icon: "🗄️", description: "Database management and query optimization" },
    { name: "Git", icon: "🌿", description: "Version control, collaboration, and project management" },
    { name: "React", icon: "⚛️", description: "Modern frontend applications with component architecture" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate progress bars
          skillCategories.forEach(category => {
            category.skills.forEach(skill => {
              setTimeout(() => {
                setProgressValues(prev => ({
                  ...prev,
                  [skill.name]: skill.level
                }));
              }, Math.random() * 1000);
            });
          });
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
    <section id="skills" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here's my technical expertise across different domains of software development
            </p>
          </div>

          {/* Tech Stack Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-16">
            {techStack.map((tech, index) => (
              <Card 
                key={tech.name}
                className={`card-elevated hover:shadow-elegant cursor-pointer transition-all duration-500 ${
                  isVisible ? 'animate-slide-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="font-semibold text-foreground text-sm mb-2">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground leading-tight">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.title}
                className={`card-elevated transition-all duration-700 ${
                  isVisible ? 'animate-slide-in-up' : ''
                }`}
                style={{ animationDelay: `${categoryIndex * 300}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm font-semibold text-muted-foreground">
                            {progressValues[skill.name] || 0}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3">
                          <div 
                            className={`h-3 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                            style={{ 
                              width: `${progressValues[skill.name] || 0}%`,
                              transition: 'width 1s ease-out'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Proficiency Legend */}
          <div className="mt-12 text-center">
            <Card className="card-glass max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Proficiency Levels</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded"></div>
                    <span className="text-muted-foreground">Beginner (0-40%)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded"></div>
                    <span className="text-muted-foreground">Intermediate (40-70%)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded"></div>
                    <span className="text-muted-foreground">Advanced (70-90%)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-success rounded"></div>
                    <span className="text-muted-foreground">Expert (90%+)</span>
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

export default Skills;