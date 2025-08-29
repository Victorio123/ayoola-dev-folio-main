import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to work together? Let's discuss your project and bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="project-card p-8">
            <h3 className="text-2xl font-semibold font-heading mb-6 text-card-foreground">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-muted-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-2"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-muted-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 min-h-32"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="project-card p-8">
              <h3 className="text-2xl font-semibold font-heading mb-6 text-card-foreground">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:ayoolahiven@example.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      Email
                    </p>
                    <p className="text-muted-foreground">
                      toolaoilqbi@gmail.com
                    </p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/Victorio123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      GitHub
                    </p>
                    <p className="text-muted-foreground">
                      github.com/Victorio123
                    </p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/ayoola-hiven-8837191b6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      LinkedIn
                    </p>
                    <p className="text-muted-foreground">
                      Ayoola Hiven
                    </p>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;