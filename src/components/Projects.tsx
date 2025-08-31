import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
     {
      title: "AgriTech AI Webapp",
      description: "Comprehensive web application for crop production and disease checking management with real-time analytics, API integration, and data-driven insights.",
      link: "https://nextgen-breeders-alliance.vercel.app/",
      github: "https://github.com/Victorio123/nextgen-breeders-hub", 
    },
    {
      title: "New Ecom",
      description: "An e-commerce website for gadgets and fashion. Features smooth shopping experience, product listings, and intuitive navigation.",
      link: "https://github.com/Victorio123",
      github: "https://github.com/Victorio123/eBobs-main"
    },
    {
      title: "Hospital Website with AI Assistant",
      description: "Integrates an AI assistant to help patients schedule appointments, access hospital information, and navigate services.",
      link: "https://github.com/Victorio123",
      github: "https://github.com/Victorio123/bob_med-main"
    },
    {
      title: "AgriTech Web App",
      description: "A web application for livestock production and breeding management. Provides data-driven insights and monitoring tools for farmers.",
      link: "https://github.com/Victorio123",
      github: "https://github.com/Victorio123/nextgen-breeders-hub"
    },
    {
      title: "Donation Landing Page",
      description: "Includes a pitch deck and Paystack payment gateway integration for secure and seamless donations.",
      link: "https://github.com/Victorio123",
      github: "https://github.com/Victorio123/donation-landing-page"
    },
    {
      title: "Investment platform",
      description: "A responsive web application that allows users track and manage their investments seamlessly and Paystack payment gateway integration for secure and seamless donations.",
      link: "https://github.com/Victorio123",
      github: "https://github.com/Victorio123/alpha"
    },
    {
      title: "Responsive Login and Sign-Up Page",
      description: "Fully responsive authentication page for user registration and login, optimized for all devices.",
      link: "https://github.com/Victorio123",
      github: "https://github.com/Victorio123/react-auth-assignment"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development, featuring responsive designs and modern technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="project-card p-6 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold font-heading mb-4 text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Button 
                    asChild
                    className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                  >
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    asChild
                  >
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;