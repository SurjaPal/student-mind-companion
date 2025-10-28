import { Card } from "@/components/ui/card";

const technologies = [
  { name: "React.js", category: "Frontend" },
  { name: "Flutter", category: "Mobile" },
  { name: "Node.js", category: "Backend" },
  { name: "Firebase", category: "Database" },
  { name: "Hugging Face", category: "AI Models" },
  { name: "OpenAI API", category: "AI Models" },
  { name: "MediaPipe", category: "Computer Vision" },
  { name: "TensorFlow", category: "Machine Learning" },
  { name: "Twilio", category: "Communications" },
  { name: "Google Fit", category: "Integrations" },
];

export const TechStack = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Powered by <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Advanced AI & Smart Design</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with industry-leading technologies to ensure reliability, security, and cutting-edge performance.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft hover:scale-105 animate-fade-in text-center group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {tech.name}
              </div>
              <div className="text-xs text-muted-foreground">
                {tech.category}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
