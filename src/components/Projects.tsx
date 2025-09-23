import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

// Import project images
import culturalHeritageImg from '@/assets/project-cultural.jpg';
import dataAnalysisImg from '@/assets/project-data-analysis.jpg';
import ecommerceImg from '@/assets/project-ecommerce.jpg';
import weatherImg from '@/assets/project-weather.jpg';
import taskManagementImg from '@/assets/project-task-management.jpg';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "Cultural Heritage Web App",
      description: "Interactive platform showcasing Indian cultural heritage with virtual tours, historical timelines, and educational content. Built with React and Node.js.",
      image: culturalHeritageImg,
      technologies: ["React", "Node.js", "MongoDB", "Express", "CSS3"],
      githubUrl: "https://github.com/yourusername/cultural-heritage",
      liveUrl: "https://cultural-heritage-demo.com",
      featured: true,
      category: "Full Stack"
    },
    {
      title: "Python Data Analysis Tool",
      description: "Comprehensive data analysis toolkit for processing CSV files, generating visualizations, and creating automated reports using pandas and matplotlib.",
      image: dataAnalysisImg,
      technologies: ["Python", "Pandas", "Matplotlib", "Jupyter", "NumPy"],
      githubUrl: "https://github.com/yourusername/data-analysis-tool",
      liveUrl: null,
      featured: true,
      category: "Python"
    },
    {
      title: "E-Commerce Dashboard",
      description: "Modern admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management capabilities.",
      image: ecommerceImg,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
      liveUrl: "https://ecommerce-dashboard-demo.com",
      featured: false,
      category: "Frontend"
    },
    {
      title: "Weather Prediction System",
      description: "Machine learning model for weather prediction using historical data analysis and real-time API integration with intuitive visualization.",
      image: weatherImg,
      technologies: ["Python", "scikit-learn", "Flask", "APIs", "Bootstrap"],
      githubUrl: "https://github.com/yourusername/weather-prediction",
      liveUrl: "https://weather-prediction-demo.com",
      featured: false,
      category: "Machine Learning"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management application with team features, deadline tracking, and progress visualization for enhanced productivity.",
      image: taskManagementImg,
      technologies: ["React", "Firebase", "Material-UI", "JavaScript"],
      githubUrl: "https://github.com/yourusername/task-management",
      liveUrl: "https://task-management-demo.com",
      featured: false,
      category: "Full Stack"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my technical projects demonstrating full-stack development, 
              Python programming, and problem-solving skills
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(p => p.featured).map((project, index) => (
              <Card 
                key={project.title}
                className={`card-elevated hover:shadow-elegant overflow-hidden transition-all duration-700 ${
                  isVisible ? 'animate-slide-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <Badge className="bg-accent text-accent-foreground font-medium">
                        {project.category}
                      </Badge>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <Card 
                key={project.title}
                className={`card-elevated hover:shadow-elegant transition-all duration-500 ${
                  isVisible ? 'animate-slide-in-up' : ''
                }`}
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`}
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 text-xs"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                    
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1 text-xs"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
