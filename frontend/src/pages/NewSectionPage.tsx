import React from 'react';
import { DashboardLayout } from '@/src/components/layout';
import { Card, Button } from '@/src/components/ui';
import { Plus, Award, BookOpen, Languages, MapPin, Heart, Star } from 'lucide-react';

export const NewSectionPage = () => {
  const customSections = [
    { id: 'cert', name: 'Certifications', icon: Award, desc: 'Professional licenses and certificates' },
    { id: 'pub', name: 'Publications', icon: BookOpen, desc: 'Books, articles, and research papers' },
    { id: 'lang', name: 'Languages', icon: Languages, desc: 'Languages you speak and your proficiency' },
    { id: 'vol', name: 'Volunteering', icon: Heart, desc: 'Community service and charity work' },
    { id: 'award', name: 'Awards', icon: Star, desc: 'Honors and industry recognitions' },
    { id: 'custom', name: 'Custom Section', icon: Plus, desc: 'Create a completely new blank section' },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-[1000px] px-4 md:px-12 py-6 md:py-10">
            <div className="mb-8 md:mb-10">
              <h1 className="text-2xl md:text-[32px] font-bold text-[#191C1E] font-headline tracking-tight">Add New Section</h1>
              <p className="text-[#44474E] text-sm md:text-[15px] font-medium">Elevate your CV by adding specialized categories to showcase your unique background.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customSections.map((section) => (
                <Card key={section.id} className="p-6 bg-white border-none shadow-sm rounded-[20px] hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#F1F3F5] group-hover:bg-[#F97316]/10 text-[#44474E] group-hover:text-[#F97316] transition-colors rounded-xl flex items-center justify-center mb-4">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-headline text-[#191C1E] mb-2">{section.name}</h3>
                  <p className="text-sm text-[#44474E] mb-6 flex-1">{section.desc}</p>
                  <Button variant="outline" className="w-full font-bold text-[13px] group-hover:bg-[#F97316] group-hover:text-white group-hover:border-none transition-colors border-[#E1E2E4]">
                    Add Section
                  </Button>
                </Card>
              ))}
            </div>
      </div>
    </DashboardLayout>
  );
};
