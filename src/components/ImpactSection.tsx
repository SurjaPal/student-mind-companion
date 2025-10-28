import { Card } from "@/components/ui/card";
import { GraduationCap, Building2 } from "lucide-react";

export const ImpactSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Real Impact, <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Real Change</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MindMate creates positive outcomes for students and institutions alike.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-10 bg-gradient-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-hover animate-fade-in">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              For Students
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A 24×7 support system that listens without judgment, provides evidence-based coping strategies, and encourages emotional stability. MindMate helps you understand your feelings, track your progress, and build lasting resilience.
            </p>
          </Card>
          
          <Card className="p-10 bg-gradient-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-hover animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary-light flex items-center justify-center">
                <Building2 className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              For Institutions
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Early detection of mental health issues leads to timely interventions, reducing dropout rates and improving student engagement. MindMate provides valuable insights while respecting privacy, helping create a supportive campus environment.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
