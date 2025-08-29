import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/80" />
      </div>
      
      <div className="section-padding container-width relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
              <span className="gradient-text">Ayoola Owolabi</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
              Full Stack Developer
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Building modern, responsive web applications
            </p>
          </div>
          
          <div className="animate-fade-in-delay">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg rounded-lg shadow-large hover:shadow-xl transition-all duration-300 animate-pulse-glow"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;