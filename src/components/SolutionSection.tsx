import { Card } from "@/components/ui/card";
import { Brain, MessageCircle, BarChart3, Bell, Trophy } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Emotional Detection",
    description: "Advanced AI analyzes text, voice, and facial expressions to understand your emotional state in real-time.",
  },
  {
    icon: MessageCircle,
    title: "AI Conversations",
    description: "Have empathetic, judgment-free conversations with an AI companion that truly listens and supports you.",
  },
  {
    icon: BarChart3,
    title: "Wellness Dashboard",
    description: "Track your mental health journey with personalized insights, mood patterns, and progress over time.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Receive timely support and connections to professional help when you need it most.",
  },
  {
    icon: Trophy,
    title: "Gamified Mental Fitness",
    description: "Build resilience through engaging activities, challenges, and rewards that make wellness fun.",
  },
];

export const SolutionSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Meet MindMate — <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">A Caring AI Companion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MindMate combines cutting-edge AI with psychological best practices to provide comprehensive mental health support tailored for students.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-hover hover:-translate-y-1 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
