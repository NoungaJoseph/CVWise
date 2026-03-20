import React from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Card } from '@/src/components/ui';
import { Check, Star, Zap } from 'lucide-react';

export const UpgradePage = () => {
  const currentPlan = "Free"; // Mock current plan

  const plans = [
    {
      name: "Executive",
      price: "$19",
      description: "For professionals ready to lead.",
      features: ["Unlimited CVs", "Advanced AI Polishing", "ATS Optimization", "Premium Templates", "Analytics Dashboard"],
      buttonText: "Upgrade to Executive",
      variant: "default" as const,
      popular: true,
      icon: <Star className="w-6 h-6 text-[#4A7C82] mb-4" />
    },
    {
      name: "Boardroom",
      price: "$49",
      description: "The ultimate career architecture suite.",
      features: ["Everything in Executive", "Priority AI Processing", "Custom Domain Portfolio", "1-on-1 Strategy Review", "Lifetime Updates"],
      buttonText: "Upgrade to Boardroom",
      variant: "outline" as const,
      popular: false,
      icon: <Zap className="w-6 h-6 text-[#191C1E] mb-4" />
    }
  ];

  return (
    <DashboardLayout>
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 py-10 md:py-20">
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold font-headline tracking-tighter text-[#191C1E] mb-4">Upgrade Your Plan</h1>
            <p className="text-[#44474E] max-w-2xl mx-auto text-base md:text-lg pt-2">
              You are currently on the <strong className="text-[#191C1E] font-bold">{currentPlan}</strong> plan. 
              Elevate your career trajectory with our premium tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.name} className={`p-8 flex flex-col relative transition-transform hover:-translate-y-1 ${plan.popular ? 'border-[#4A7C82] shadow-2xl' : 'border-[#E1E2E4] shadow-md'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4A7C82] text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  {plan.icon}
                  <h3 className="text-3xl font-bold font-headline text-[#191C1E] mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-5xl font-black text-[#191C1E] tracking-tight">{plan.price}</span>
                    <span className="text-[#44474E] text-sm font-medium">/month</span>
                  </div>
                  <p className="text-[#44474E] text-sm leading-relaxed">{plan.description}</p>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-[#191C1E] font-medium">
                      <div className="bg-[#4A7C82]/10 p-1 rounded-full">
                        <Check className="w-3.5 h-3.5 text-[#4A7C82]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant={plan.variant} 
                  className={`w-full py-6 rounded-xl font-bold text-base transition-all ${plan.popular ? 'bg-[#333D47] text-white hover:bg-[#191C1E] hover:shadow-lg' : 'hover:bg-[#F1F0F4]'}`}
                >
                  {plan.buttonText}
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-[#44474E]">
              Need help deciding? <a href="#" className="text-[#4A7C82] font-bold hover:underline">Contact our support team.</a>
            </p>
          </div>
      </div>
    </DashboardLayout>
  );
};
