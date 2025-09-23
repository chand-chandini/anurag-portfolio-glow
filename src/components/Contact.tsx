import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download, 
  Send,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      color: "text-accent"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "text-success"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Visakhapatnam, Andhra Pradesh, India",
      href: null,
      color: "text-primary"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:your.email@example.com",
      color: "hover:text-accent"
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const downloadResume = () => {
    // In a real implementation, this would download the actual resume file
    toast({
      title: "Resume Download",
      description: "Resume download will be available soon!",
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can work together 
              to create something amazing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className={`lg:col-span-1 transition-all duration-700 ${
              isVisible ? 'animate-slide-in-left' : ''
            }`}>
              <Card className="card-elevated h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={info.label} className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg bg-surface ${info.color}`}>
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">
                          {info.label}
                        </h3>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="pt-6 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-4">Follow Me</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-xl bg-surface border border-border hover:shadow-card transition-all duration-300 ${social.color}`}
                          aria-label={social.label}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <Button 
                      onClick={downloadResume}
                      className="w-full bg-gradient-hero text-white hover:shadow-glow transition-all duration-300"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-2 transition-all duration-700 ${
              isVisible ? 'animate-slide-in-right' : ''
            }`}>
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-medium">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="border-border focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="border-border focus:ring-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground font-medium">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or idea..."
                        rows={6}
                        className="border-border focus:ring-primary resize-none"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full md:w-auto px-8 py-3 bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-16 text-center">
            <Card className="card-glass max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Quick Links
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-surface border border-border hover:shadow-card transition-all duration-300 hover:scale-105"
                  >
                    <Github className="h-6 w-6 text-foreground" />
                    <span className="font-medium text-foreground">View My Code</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-surface border border-border hover:shadow-card transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin className="h-6 w-6 text-blue-600" />
                    <span className="font-medium text-foreground">Professional Profile</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                  
                  <button
                    onClick={downloadResume}
                    className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-surface border border-border hover:shadow-card transition-all duration-300 hover:scale-105"
                  >
                    <Download className="h-6 w-6 text-accent" />
                    <span className="font-medium text-foreground">Download Resume</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;