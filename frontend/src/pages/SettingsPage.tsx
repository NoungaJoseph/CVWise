import React from 'react';
import { DashboardLayout } from '@/src/components/layout';
import { Card, Button, Input } from '@/src/components/ui';

export const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="max-w-[1000px] px-4 md:px-12 py-6 md:py-10">
            <div className="mb-6 md:mb-8">
              <h1 className="text-2xl md:text-[32px] font-bold text-[#191C1E] font-headline tracking-tight">Account Settings</h1>
              <p className="text-[#44474E] text-sm md:text-[15px] font-medium">Manage your subscription, security, and notification preferences.</p>
            </div>

            <div className="space-y-8">
              <Card className="p-8 bg-white border-none shadow-sm rounded-[20px]">
                <h3 className="text-lg font-bold font-headline mb-4">Subscription Plan</h3>
                <div className="bg-[#F8F9FA] p-6 rounded-xl border border-[#E1E2E4] flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-[#191C1E]">Free Tier</h4>
                    <p className="text-sm text-[#44474E] mt-1">Upgrade to unlock ATS-optimized templates and unlimited downloads.</p>
                  </div>
                  <Button className="bg-[#333D47] text-white hover:bg-[#191C1E] px-6 py-2 rounded-lg font-bold text-sm">
                    Upgrade Plan
                  </Button>
                </div>
              </Card>

              <Card className="p-8 bg-white border-none shadow-sm rounded-[20px]">
                <h3 className="text-lg font-bold font-headline mb-4">Security</h3>
                <div className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">Current Password</label>
                    <Input type="password" placeholder="••••••••" className="bg-[#EAECEF] border-none h-10 text-[13px]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#44474E]">New Password</label>
                    <Input type="password" placeholder="••••••••" className="bg-[#EAECEF] border-none h-10 text-[13px]" />
                  </div>
                  <Button variant="outline" className="mt-2 text-[13px] font-bold hidden">Update Password</Button>
                </div>
              </Card>
            </div>
      </div>
    </DashboardLayout>
  );
};
