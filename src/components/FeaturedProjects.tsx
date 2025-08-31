import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, TrendingUp } from "lucide-react";

const FeaturedProjects = () => {
  const featuredProjects = [
      {
      title: "CropTech AI Webapp",
      description: "Comprehensive web application for crop production and disease checking management with real-time analytics, API integration, and data-driven insights.",
      technologies: ["React", "Typescript", "AI", "Analytics"],
      link: "https://nextgen-breeders-alliance.vercel.app/",
      github: "https://github.com/Victorio123/nextgen-breeders-hub", 
      status: "AI Integrated",
      highlight: "AgriTech Solution"
    },
    {
      title: "New Ecom",
      description: "A modern e-commerce platform built with React and Node.js, featuring seamless shopping experiences, advanced product filtering, and secure payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Fullstack"],
      link: "https://ebobs-main-production.up.railway.app/#",
      github: "https://github.com/Victorio123/eBobs-main",
      status: "Production Ready",
      highlight: "Full Stack E-commerce"
    },
    {
      title: "Hospital AI Assistant",
      description: "Revolutionary healthcare platform integrating AI-powered assistant for appointment scheduling, patient management, and intelligent healthcare navigation.",
      technologies: ["Next.js", "AI/ML", "PostgreSQL", "Typescript"],
      link: "#", 
      github: "https://github.com/Victorio123/bob_med-main",
      status: "AI Powered",
      highlight: "Healthcare Innovation"
    },
    {
      title: "AgriTech Management",
      description: "Comprehensive web application for livestock production and breeding management with real-time analytics, IoT integration, and data-driven insights.",
      technologies: ["React", "Typescript", "IoT", "Analytics"],
      link: "https://nextgen-breeders-alliance.vercel.app/",
      github: "https://github.com/Victorio123/nextgen-breeders-hub", 
      status: "IoT Integrated",
      highlight: "AgriTech Solution"
    },
    {
      title: "Donation Platform",
      description: "Professional donation landing page with integrated pitch deck presentation and secure Paystack payment gateway for seamless contribution processing.",
      technologies: ["React", "Paystack", "PHP", "MySQL"],
      link: "https://donationland.netlify.app/",
      github: "https://github.com/Victorio123/donation-landing-page",
      status: "Payment Integrated",
      highlight: "Fintech Solution"
    },
    {
      title: "Investment Platform",
      description: "A responsive web application that allows users track and manage their investments seamlessly and Paystack payment gateway integration for secure and seamless donations.",
      technologies: ["Javascript", "Paystack", "PHP", "MySQL"],
      link: "https://alpha-production-923f.up.railway.app/index.php",
      github: "https://github.com/Victorio123/alpha",
      status: "Payment Integrated",
      highlight: "Fintech Solution"
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="h-8 w-8 text-primary animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <TrendingUp className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my most impactful projects that demonstrate expertise across industries - 
            from e-commerce and healthcare to AgriTech and fintech solutions.
          </p>
        </div>

        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredProjects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                <Card className="project-card p-8 h-full group hover:scale-[1.02] transition-all duration-500">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex flex-col">
                        <Badge className="w-fit mb-3 bg-primary/10 text-primary border-primary/20 font-semibold">
                          {project.highlight}
                        </Badge>
                        <h3 className="text-2xl font-bold font-heading text-card-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                        {project.status}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-card-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="bg-accent/10 text-accent-foreground border-accent/20 hover:bg-accent/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-auto">
                      <Button 
                        asChild
                        className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="icon"
                        asChild
                        className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-12 bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedProjects;
