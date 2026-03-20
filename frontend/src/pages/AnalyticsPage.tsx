import React from 'react';
import { 
  BarChart3, 
  Eye, 
  Download, 
  Search, 
  TrendingUp, 
  MapPin, 
  Globe, 
  ArrowUpRight,
  ArrowDownRight,
  Calendar
} from 'lucide-react';
import { DashboardLayout } from '@/src/components/layout';
import { Card, Button } from '@/src/components/ui';
import { cn } from '@/src/lib/utils';

export const AnalyticsPage = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 md:py-10">
            <header className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Performance Analytics</h1>
                <p className="text-on-surface-variant text-sm md:text-base text-on-surface-variant">Measuring the market resonance of your professional architecture.</p>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-high p-1 rounded-xl w-full md:w-auto overflow-x-auto">
                <button className="whitespace-nowrap flex-1 md:flex-none px-4 py-2 bg-surface-container-lowest rounded-lg shadow-sm text-sm font-bold text-primary">Last 30 Days</button>
                <button className="whitespace-nowrap flex-1 md:flex-none px-4 py-2 text-sm font-bold text-on-surface-variant">Last 90 Days</button>
                <button className="whitespace-nowrap flex-1 md:flex-none px-4 py-2 text-sm font-bold text-on-surface-variant">All Time</button>
              </div>
            </header>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <MetricCard 
                icon={Eye} 
                label="Profile Views" 
                value="1,284" 
                trend="+12.5%" 
                isUp 
              />
              <MetricCard 
                icon={Search} 
                label="Search Appearances" 
                value="452" 
                trend="+5.2%" 
                isUp 
              />
              <MetricCard 
                icon={Download} 
                label="CV Downloads" 
                value="86" 
                trend="-2.4%" 
                isUp={false} 
              />
              <MetricCard 
                icon={TrendingUp} 
                label="Editorial Score" 
                value="92/100" 
                trend="+4 pts" 
                isUp 
              />
            </div>

            <div className="grid grid-cols-12 gap-8">
              {/* Engagement Chart Placeholder */}
              <div className="col-span-12 lg:col-span-8">
                <Card className="p-8 h-full">
                  <div className="flex justify-between items-center mb-10">
                    <h3 className="text-xl font-bold font-headline">Engagement Trends</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-secondary"></div>
                        <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Views</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary/20"></div>
                        <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Downloads</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-64 flex items-end gap-4 px-4">
                    {[40, 60, 45, 90, 65, 80, 55, 70, 85, 60, 75, 95].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                        <div className="w-full bg-surface-container-high rounded-t-lg relative overflow-hidden h-full">
                          <div 
                            className="absolute bottom-0 w-full bg-[#F97316] transition-all duration-1000 group-hover:opacity-80" 
                            style={{ height: `${h}%` }}
                          ></div>
                        </div>
                        <span className="text-[10px] font-bold text-outline">M{i+1}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Geographic Reach */}
              <div className="col-span-12 lg:col-span-4">
                <Card className="p-8 h-full">
                  <h3 className="text-xl font-bold font-headline mb-8">Geographic Reach</h3>
                  <div className="space-y-6">
                    <LocationItem country="United States" city="New York, San Francisco" percentage={65} />
                    <LocationItem country="United Kingdom" city="London" percentage={15} />
                    <LocationItem country="Germany" city="Berlin, Munich" percentage={10} />
                    <LocationItem country="Singapore" city="Singapore" percentage={5} />
                    <LocationItem country="Other" city="Global" percentage={5} />
                  </div>
                  <div className="mt-10 pt-8 border-t border-outline-variant/10">
                    <div className="flex items-center gap-3 text-[#F97316]">
                      <Globe className="w-5 h-5" />
                      <span className="text-sm font-bold">Global Market Visibility</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Recent Activity */}
              <div className="col-span-12">
                <Card className="p-8">
                  <h3 className="text-xl font-bold font-headline mb-8">Recent Interactions</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-outline-variant/10">
                          <th className="pb-4 text-xs font-bold text-outline uppercase tracking-widest">Event</th>
                          <th className="pb-4 text-xs font-bold text-outline uppercase tracking-widest">Source / Location</th>
                          <th className="pb-4 text-xs font-bold text-outline uppercase tracking-widest">Time</th>
                          <th className="pb-4 text-xs font-bold text-outline uppercase tracking-widest text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/5">
                        <ActivityRow 
                          event="CV Downloaded" 
                          source="LinkedIn / New York, US" 
                          time="2 hours ago" 
                          icon={Download} 
                          iconColor="text-secondary"
                        />
                        <ActivityRow 
                          event="Profile View" 
                          source="Direct / London, UK" 
                          time="5 hours ago" 
                          icon={Eye} 
                          iconColor="text-primary"
                        />
                        <ActivityRow 
                          event="Search Appearance" 
                          source="Google / Berlin, DE" 
                          time="Yesterday" 
                          icon={Search} 
                          iconColor="text-outline"
                        />
                        <ActivityRow 
                          event="CV Downloaded" 
                          source="Email Link / Singapore" 
                          time="2 days ago" 
                          icon={Download} 
                          iconColor="text-secondary"
                        />
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            </div>
          </div>
    </DashboardLayout>
  );
};

const MetricCard = ({ icon: Icon, label, value, trend, isUp }: { icon: any; label: string; value: string; trend: string; isUp: boolean }) => (
  <Card className="p-6">
    <div className="flex justify-between items-start mb-4">
      <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
        <Icon className="w-5 h-5" />
      </div>
      <div className={cn(
        "flex items-center gap-1 text-xs font-bold",
        isUp ? "text-emerald-600" : "text-error"
      )}>
        {isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
        {trend}
      </div>
    </div>
    <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">{label}</p>
    <h4 className="text-2xl font-extrabold text-on-surface font-headline">{value}</h4>
  </Card>
);

const LocationItem = ({ country, city, percentage }: { country: string; city: string; percentage: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-end">
      <div>
        <p className="text-sm font-bold text-on-surface">{country}</p>
        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">{city}</p>
      </div>
      <span className="text-xs font-bold text-on-surface">{percentage}%</span>
    </div>
    <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
      <div className="h-full bg-secondary" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const ActivityRow = ({ event, source, time, icon: Icon, iconColor }: { event: string; source: string; time: string; icon: any; iconColor: string }) => (
  <tr className="group hover:bg-surface-container-low transition-colors">
    <td className="py-4">
      <div className="flex items-center gap-3">
        <Icon className={cn("w-4 h-4", iconColor)} />
        <span className="text-sm font-bold text-on-surface">{event}</span>
      </div>
    </td>
    <td className="py-4 text-sm text-on-surface-variant">{source}</td>
    <td className="py-4 text-sm text-on-surface-variant font-medium">{time}</td>
    <td className="py-4 text-right">
      <button className="text-xs font-bold text-secondary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hover:underline">
        View Details
      </button>
    </td>
  </tr>
);
