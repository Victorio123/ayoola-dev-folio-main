import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Server, Cloud, Palette } from "lucide-react";
import { useEffect } from "react";

const TechCarousel = () => {
  const techStacks = [
    {
      category: "Frontend Mastery",
      icon: Palette,
      color: "from-blue-600 to-cyan-600",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript ES6+", "HTML5", "CSS3"],
      description: "Creating stunning, responsive user interfaces"
    },
    {
      category: "Backend Expertise", 
      icon: Server,
      color: "from-green-600 to-emerald-600",
      technologies: ["Node.js", "Express.js", "PHP", "Python", "REST APIs", "GraphQL", "Microservices"],
      description: "Building scalable server-side solutions"
    },
    {
      category: "Database Solutions",
      icon: Database,
      color: "from-purple-600 to-violet-600", 
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Prisma", "Database Design"],
      description: "Efficient data management and optimization"
    },
    {
      category: "Cloud expertise",
      icon: Cloud,
      color: "from-orange-600 to-red-600",
      technologies: ["AWS", "Vercel", "Netlify", "Git", "Linux"],
      description: "Modern deployment and infrastructure"
    },
    {
      category: "Full Stack Integration",
      icon: Code,
      color: "from-indigo-600 to-blue-600",
      technologies: ["MERN Stack", "LAMP Stack", "JAMstack", "Serverless", "Authentication", "Payment Systems"],
      description: "End-to-end application development"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background to-accent/10">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing my comprehensive skill set across the full technology stack. 
            From pixel-perfect frontends to robust backends, I deliver complete solutions.
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
            {techStacks.map((stack, index) => {
              const IconComponent = stack.icon;
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="project-card p-8 h-full group hover:scale-105 transition-all duration-500">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${stack.color} shadow-lg`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold font-heading text-card-foreground">
                            {stack.category}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {stack.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="grid grid-cols-2 gap-2">
                          {stack.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              className="skill-badge px-3 py-2 text-sm font-medium hover:scale-105 transition-transform duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-12 bg-primary/10 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default TechCarousel;