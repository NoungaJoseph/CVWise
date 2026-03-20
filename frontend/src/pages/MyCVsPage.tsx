import React from 'react';
import { Link } from 'react-router-dom';
import { DashboardLayout } from '@/src/components/layout';
import { Button, Card } from '@/src/components/ui';
import { PlusCircle, FileText, MoreVertical, Edit2, Download, Trash2 } from 'lucide-react';

export const MyCVsPage = () => {
  const cvs = [
    { id: 1, title: 'Senior Product Designer CV', lastEdited: '2 hours ago', template: 'The Helvetica Standard' },
    { id: 2, title: 'UX Lead Resume', lastEdited: '3 days ago', template: 'The Curator' },
    { id: 3, title: 'Tech Director (Draft)', lastEdited: '1 week ago', template: 'Silicon Valley' },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-[1000px] px-4 md:px-12 py-6 md:py-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 md:mb-12">
              <div>
                <h1 className="text-2xl md:text-[32px] font-bold text-[#191C1E] font-headline tracking-tight">My CVs</h1>
                <p className="text-[#44474E] text-sm md:text-[15px] font-medium">Manage your architectural career documents.</p>
              </div>
              <Link to="/templates" className="w-full md:w-auto">
                <Button className="w-full md:w-auto bg-[#F97316] text-white hover:bg-[#EA580C] px-6 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-sm order-first md:order-last">
                  <PlusCircle className="w-5 h-5" />
                  Create New CV
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cvs.map((cv) => (
                <Card key={cv.id} className="p-0 overflow-hidden bg-white border-none shadow-sm flex flex-col group rounded-[20px]">
                  <div className="h-48 bg-[#F1F3F5] flex items-center justify-center p-6 relative">
                    <FileText className="w-16 h-16 text-[#F97316]/20" />
                    <div className="absolute top-4 right-4">
                      <button className="text-[#44474E] hover:text-[#191C1E] transition-colors bg-white/50 backdrop-blur-sm p-1.5 rounded-md opacity-0 group-hover:opacity-100">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[17px] font-bold font-headline text-[#191C1E] mb-1 truncate">{cv.title}</h3>
                    <p className="text-sm text-[#44474E] mb-6">Edited {cv.lastEdited} • {cv.template}</p>
                    <div className="flex items-center gap-2">
                      <Link to={`/editor/personal`} className="flex-1">
                        <Button variant="outline" className="w-full flex items-center justify-center gap-2 bg-[#F8F9FA] border-none text-[13px] font-bold h-10">
                          <Edit2 className="w-4 h-4" /> Edit
                        </Button>
                      </Link>
                      <Button variant="outline" className="flex-1 flex items-center justify-center gap-2 bg-[#F8F9FA] border-none text-[13px] font-bold h-10">
                        <Download className="w-4 h-4" /> Export
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
      </div>
    </DashboardLayout>
  );
};
