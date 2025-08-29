import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Server } from "lucide-react";

const Skills = () => {
  const frontendSkills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"
  ];
  
  const backendSkills = [
    "Node.js", "Express.js", "PHP", "Python", "REST APIs"
  ];
  
  const databaseSkills = [
    "MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"
  ];
  
  const toolsSkills = [
    "Git", "AWS", "Vercel", "Netlify", "VS Code"
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: frontendSkills,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: backendSkills,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database Management",
      icon: Database,
      skills: databaseSkills,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Tools & Technologies",
      icon: Code,
      skills: toolsSkills,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="project-card p-8 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading text-card-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      className="skill-badge px-3 py-1 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;