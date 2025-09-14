import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Search, Download, Archive } from "lucide-react";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const archivedItems = [
  {
    id: 1,
    title: "Legacy CRM Migration",
    type: "Project",
    company: "RetailCorp",
    completedDate: "2023-09-15",
    value: "$95,000",
    status: "Completed",
    documents: 12
  },
  {
    id: 2,
    title: "Q2 Marketing Campaign",
    type: "Opportunity",
    company: "BrandMax",
    completedDate: "2023-08-30",
    value: "$45,000",
    status: "Won",
    documents: 8
  },
  {
    id: 3,
    title: "Database Optimization",
    type: "Project",
    company: "DataFlow Inc",
    completedDate: "2023-10-20",
    value: "$120,000",
    status: "Completed",
    documents: 15
  },
  {
    id: 4,
    title: "Mobile App Redesign",
    type: "Opportunity",
    company: "AppVentures",
    completedDate: "2023-07-12",
    value: "$65,000",
    status: "Lost",
    documents: 6
  },
  {
    id: 5,
    title: "Cloud Infrastructure Setup",
    type: "Project",
    company: "CloudFirst Ltd",
    completedDate: "2023-11-05",
    value: "$180,000",
    status: "Completed",
    documents: 20
  },
  {
    id: 6,
    title: "E-commerce Platform",
    type: "Opportunity",
    company: "ShopSmart",
    completedDate: "2023-06-28",
    value: "$200,000",
    status: "Won",
    documents: 25
  }
];

function getStatusColor(status: string) {
  switch (status) {
    case 'Completed': return 'bg-[#889870] text-[#EDEDED]';
    case 'Won': return 'bg-[#889870] text-[#EDEDED]';
    case 'Lost': return 'bg-[#F7F7F7] text-[#3D3D3D] border border-[#3D3D3D]/20';
    default: return 'bg-[#EDEDED] text-[#3D3D3D]';
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case 'Project': return 'bg-[#3D3D3D] text-[#EDEDED]';
    case 'Opportunity': return 'bg-[#F7F7F7] text-[#3D3D3D] border border-[#3D3D3D]/20';
    default: return 'bg-[#EDEDED] text-[#3D3D3D]';
  }
}

export function Archives() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#3D3D3D] mb-2">Archives</h1>
          <p className="text-[#3D3D3D]/70">Browse completed projects and closed opportunities</p>
        </div>
        <Button className="bg-[#F7F7F7] hover:bg-[#EDEDED] text-[#3D3D3D] border border-[#3D3D3D]/20">
          <Download className="w-4 h-4 mr-2" />
          Export All
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="p-4 bg-[#F7F7F7] border-[#EDEDED]">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#3D3D3D]/40" />
            <Input 
              placeholder="Search archives..." 
              className="pl-10 bg-[#EDEDED] border-[#EDEDED] focus:border-[#3D3D3D]"
            />
          </div>
          <Select>
            <SelectTrigger className="w-40 bg-[#EDEDED] border-[#EDEDED]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="project">Projects</SelectItem>
              <SelectItem value="opportunity">Opportunities</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-40 bg-[#EDEDED] border-[#EDEDED]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="won">Won</SelectItem>
              <SelectItem value="lost">Lost</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-[#F7F7F7] border-[#EDEDED]">
          <div className="space-y-2">
            <p className="text-sm text-[#3D3D3D]/70">Total Archived</p>
            <p className="text-2xl font-bold text-[#3D3D3D]">6</p>
          </div>
        </Card>
        <Card className="p-4 bg-[#F7F7F7] border-[#EDEDED]">
          <div className="space-y-2">
            <p className="text-sm text-[#3D3D3D]/70">Total Value</p>
            <p className="text-2xl font-bold text-[#3D3D3D]">$705K</p>
          </div>
        </Card>
        <Card className="p-4 bg-[#F7F7F7] border-[#EDEDED]">
          <div className="space-y-2">
            <p className="text-sm text-[#3D3D3D]/70">Success Rate</p>
            <p className="text-2xl font-bold text-[#889870]">75%</p>
          </div>
        </Card>
        <Card className="p-4 bg-[#F7F7F7] border-[#EDEDED]">
          <div className="space-y-2">
            <p className="text-sm text-[#3D3D3D]/70">Documents</p>
            <p className="text-2xl font-bold text-[#3D3D3D]">86</p>
          </div>
        </Card>
      </div>

      {/* Archives List */}
      <Card className="bg-[#F7F7F7] border-[#EDEDED]">
        <div className="p-6">
          <h3 className="text-lg font-bold text-[#3D3D3D] mb-4">Archived Items</h3>
          <div className="space-y-4">
            {archivedItems.map((item) => (
              <div 
                key={item.id} 
                className="p-4 bg-[#EDEDED] rounded-lg hover:bg-[#EDEDED]/80 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Archive className="w-4 h-4 text-[#3D3D3D]/60" />
                      <h4 className="font-bold text-[#3D3D3D]">{item.title}</h4>
                      <Badge className={getTypeColor(item.type)}>
                        {item.type}
                      </Badge>
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-[#3D3D3D]/70 mb-2">{item.company}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#3D3D3D]/60">Completed: {item.completedDate}</span>
                      <span className="text-[#3D3D3D]/60">{item.documents} documents</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-[#3D3D3D] mb-2">{item.value}</p>
                    <Button size="sm" variant="outline" className="border-[#EDEDED] hover:bg-[#889870] hover:text-[#EDEDED]">
                      <Download className="w-3 h-3 mr-1" />
                      Export
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}