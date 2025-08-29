import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border py-12">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Victorio123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/ayoola-hiven-8837191b6"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            "Building the future, one line of code at a time."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;