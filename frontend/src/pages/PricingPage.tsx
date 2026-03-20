import React from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '@/src/components/layout';
import { Button, Card } from '@/src/components/ui';
import { Check, Zap, Star, Shield } from 'lucide-react';

export const PricingPage = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for starting your career journey.",
      features: ["1 CV Blueprint", "Standard AI Polishing", "PDF Export", "Basic Templates"],
      buttonText: "Get Started",
      variant: "outline" as const
    },
    {
      name: "Executive",
      price: "$19",
      description: "For professionals ready to lead.",
      features: ["Unlimited CVs", "Advanced AI Polishing", "ATS Optimization", "Premium Templates", "Analytics Dashboard"],
      buttonText: "Upgrade Now",
      variant: "default" as const,
      popular: true
    },
    {
      name: "Boardroom",
      price: "$49",
      description: "The ultimate career architecture suite.",
      features: ["Everything in Executive", "Priority AI Processing", "Custom Domain Portfolio", "1-on-1 Strategy Review", "Lifetime Updates"],
      buttonText: "Contact Sales",
      variant: "outline" as const
    }
  ];

  return (
    <MainLayout>
      <div className="px-6 md:px-24 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter text-[#191C1E] mb-4">
              Invest in Your Future.
            </h1>
            <p className="text-[#44474E] max-w-2xl mx-auto text-lg">
              Unlock the full potential of your professional architecture. Production-grade tools for serious leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <Card key={i} className={`p-8 flex flex-col relative ${plan.popular ? 'border-[#F97316] shadow-xl' : 'border-[#E1E2E4]'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F97316] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold font-headline text-[#191C1E] mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-black text-[#191C1E]">{plan.price}</span>
                    <span className="text-[#44474E] text-sm">/month</span>
                  </div>
                  <p className="text-[#44474E] text-sm leading-relaxed">{plan.description}</p>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-[#44474E]">
                      <Check className="w-4 h-4 text-[#F97316]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/login" className="w-full">
                  <Button 
                    variant={plan.variant} 
                    className={`w-full py-6 rounded-lg font-bold ${plan.popular ? 'bg-[#333D47] text-white hover:bg-[#191C1E]' : ''}`}
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
