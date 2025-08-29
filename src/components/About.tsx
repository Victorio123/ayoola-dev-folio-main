import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="hero-card p-8 md:p-12 text-center animate-fade-up">
            <div className="mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-primary mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-foreground">AH</span>
              </div>
            </div>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
              I am a passionate Full Stack Developer with extensive experience in both frontend and backend development. 
              My expertise spans the entire web development lifecycle from crafting intuitive user interfaces with React, 
              Next.js, and modern CSS frameworks to building robust server-side applications using Node.js, Express, and PHP.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              I specialize in creating scalable, high-performance web applications that deliver exceptional user experiences. 
              With proficiency in multiple databases (MySQL, PostgreSQL, MongoDB), cloud platforms (AWS, Vercel), and 
              modern development tools, I bring ideas to life through clean, maintainable code and innovative solutions. 
              I'm passionate about staying current with emerging technologies and best practices to deliver cutting-edge solutions 
              that drive business growth and user engagement.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-accent/20 rounded-lg">
                <h3 className="font-semibold text-accent-foreground mb-2">Frontend</h3>
                <p className="text-sm text-muted-foreground">Modern, responsive interfaces</p>
              </div>
              <div className="p-4 bg-accent/20 rounded-lg">
                <h3 className="font-semibold text-accent-foreground mb-2">Backend</h3>
                <p className="text-sm text-muted-foreground">Scalable server solutions</p>
              </div>
              <div className="p-4 bg-accent/20 rounded-lg">
                <h3 className="font-semibold text-accent-foreground mb-2">Database</h3>
                <p className="text-sm text-muted-foreground">Efficient data management</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;