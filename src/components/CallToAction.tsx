import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary-glow)/0.2),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-primary-foreground">
            Let's Make Student Mental Health a Priority
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join us in revolutionizing mental wellness support for students. Together, we can create a healthier, more supportive educational environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-soft hover:shadow-hover transition-all duration-300 group">
              <Mail className="mr-2 w-5 h-5" />
              Join Waitlist
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Contact Us
            </Button>
          </div>
          
          <div className="mt-12 pt-12 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80 mb-4">
              Want to see MindMate in action?
            </p>
            <Button variant="link" className="text-primary-foreground hover:text-primary-foreground/80 group">
              View Demo on GitHub
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
