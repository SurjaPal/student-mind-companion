import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    icon: AlertCircle,
    stat: "1 in 5",
    label: "students face anxiety or depression",
    source: "World Health Organization",
  },
  {
    icon: TrendingUp,
    stat: "75%",
    label: "of Indian college students report high stress",
    source: "National Mental Health Survey",
  },
  {
    icon: Users,
    stat: "Only 10%",
    label: "of students seek professional help",
    source: "Mental Health Foundation",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            The Silent Struggle of Student Mental Health
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Behind academic pressures and social challenges lies a mental health crisis that demands our attention.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((item, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-hover animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-5xl font-bold mb-3 bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                {item.stat}
              </div>
              <p className="text-lg font-medium text-foreground mb-2">
                {item.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {item.source}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
