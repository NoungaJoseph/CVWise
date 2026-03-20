import React from 'react';
import { DashboardLayout } from '@/src/components/layout';
import { Card, Button } from '@/src/components/ui';
import { HelpCircle, Mail, MessageSquare } from 'lucide-react';

export const SupportPage = () => {
  return (
    <DashboardLayout>
      <div className="max-w-[1000px] px-4 md:px-12 py-6 md:py-10">
            <div className="mb-6 md:mb-8">
              <h1 className="text-2xl md:text-[32px] font-bold text-[#191C1E] font-headline tracking-tight">Help & Support</h1>
              <p className="text-[#44474E] text-sm md:text-[15px] font-medium">Get assistance with your architecture and editorial needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white border-none shadow-sm rounded-[20px] flex gap-4">
                <div className="w-12 h-12 bg-[#F97316]/10 text-[#F97316] flex items-center justify-center rounded-full flex-shrink-0">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-headline mb-2">Knowledge Base</h3>
                  <p className="text-[#44474E] text-sm mb-4 leading-relaxed">Browse our guides on ATS formatting and executive storytelling.</p>
                  <Button variant="outline" className="text-sm font-bold">Read Guides</Button>
                </div>
              </Card>

              <Card className="p-8 bg-white border-none shadow-sm rounded-[20px] flex gap-4">
                <div className="w-12 h-12 bg-[#F97316]/10 text-[#F97316] flex items-center justify-center rounded-full flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-headline mb-2">Email Support</h3>
                  <p className="text-[#44474E] text-sm mb-4 leading-relaxed">Reach our editorial team for personalized assistance with your account.</p>
                  <Button variant="outline" className="text-sm font-bold">Contact Us</Button>
                </div>
              </Card>
            </div>
      </div>
    </DashboardLayout>
  );
};
