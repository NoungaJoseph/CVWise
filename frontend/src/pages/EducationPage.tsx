import React from 'react';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Input, Card } from '@/src/components/ui';
import { Trash2, ArrowRight, Plus } from 'lucide-react';

export const EducationPage = () => {
  return (
    <DashboardLayout cvTitle="Resume Architect" cvSub="Editorial Mode">
      <div className="max-w-[1000px] px-4 md:px-12 py-6 md:py-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6">
              <div className="space-y-1">
                <h1 className="text-2xl md:text-[32px] font-bold text-[#191C1E] font-headline tracking-tight">Education</h1>
                <p className="text-[#44474E] text-sm md:text-[15px] font-medium">Highlight your academic credentials and highest degrees attained.</p>
              </div>
              <div className="text-left md:text-right flex flex-col items-start md:items-end w-full md:w-auto">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F97316] mb-1">Step 3 of 5</p>
                <p className="text-lg font-bold text-[#191C1E] font-headline">60% Complete</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full flex items-center mb-12">
              <div className="h-1 bg-[#F97316] w-[60%] rounded-l-full"></div>
              <div className="h-1 bg-[#E1E2E4] w-[40%] rounded-r-full"></div>
            </div>

            <div className="flex-1 bg-white p-10 rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <div className="space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Institution</label>
                    <Input 
                      placeholder="e.g. Stanford University" 
                      className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#F97316]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Degree</label>
                    <Input 
                      placeholder="e.g. Master of Business Administration" 
                      className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#F97316]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Start Date</label>
                    <Input 
                      type="month"
                      className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#F97316]/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">End Date (or Expected)</label>
                    <Input 
                      type="month"
                      className="bg-[#EAECEF] border-none h-12 text-[#191C1E] font-medium text-[15px] rounded-lg px-4 focus:ring-2 focus:ring-[#F97316]/20"
                    />
                  </div>
                </div>

                <Button variant="outline" className="w-full border-2 border-dashed border-[#E1E2E4] bg-transparent text-[#F97316] hover:bg-[#F8F9FA] py-6 rounded-xl font-bold flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add Another Degree
                </Button>

                {/* Action Buttons */}
                <div className="pt-8 flex justify-between items-center border-t border-[#F1F0F4] mt-4">
                  <button className="flex items-center gap-2 text-[14px] font-bold text-[#44474E] hover:text-[#191C1E] transition-colors py-2 px-1">
                    <Trash2 className="w-[18px] h-[18px]" />
                    Discard All
                  </button>
                  <div className="flex gap-4">
                    <Button variant="outline" className="bg-[#F1F3F5] hover:bg-[#EAECEF] border-none text-[#191C1E] px-8 py-2.5 rounded-lg font-bold text-[14px]">
                      Back
                    </Button>
                    <Button className="bg-[#F97316] text-white hover:bg-[#EA580C] px-8 py-2.5 rounded-lg font-bold text-[14px] flex items-center gap-2 shadow-lg shadow-orange-500/10">
                      Save & Next
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </DashboardLayout>
  );
};
