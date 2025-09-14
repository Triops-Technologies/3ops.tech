import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Plus, Search, Filter } from "lucide-react";
import { Input } from "../ui/input";

const opportunities = [
  {
    id: 1,
    title: "Enterprise Software Solution",
    company: "Tech Innovations Corp",
    value: "$125,000",
    status: "In Progress",
    stage: "Proposal",
    deadline: "2024-01-15",
    probability: 75
  },
  {
    id: 2,
    title: "Mobile App Development",
    company: "StartUp Dynamics",
    value: "$85,000",
    status: "New",
    stage: "Discovery",
    deadline: "2024-01-30",
    probability: 45
  },
  {
    id: 3,
    title: "Cloud Migration Project",
    company: "Global Industries",
    value: "$200,000",
    status: "In Progress",
    stage: "Negotiation",
    deadline: "2023-12-20",
    probability: 90
  },
  {
    id: 4,
    title: "Data Analytics Platform",
    company: "Finance Solutions Ltd",
    value: "$150,000",
    status: "Qualified",
    stage: "Presentation",
    deadline: "2024-02-10",
    probability: 60
  },
  {
    id: 5,
    title: "E-commerce Integration",
    company: "Retail Chain Co",
    value: "$75,000",
    status: "New",
    stage: "Initial Contact",
    deadline: "2024-03-01",
    probability: 30
  }
];

function getStatusColor(status: string) {
  switch (status) {
    case 'New': return 'bg-[#889870] text-[#EDEDED]';
    case 'In Progress': return 'bg-[#F7F7F7] text-[#3D3D3D] border border-[#3D3D3D]/20';
    case 'Qualified': return 'bg-[#3D3D3D] text-[#EDEDED]';
    default: return 'bg-[#EDEDED] text-[#3D3D3D]';
  }
}

function getProbabilityColor(probability: number) {
  if (probability >= 70) return 'text-[#889870]';
  if (probability >= 40) return 'text-[#3D3D3D]';
  return 'text-[#3D3D3D]';
}

export function Opportunities() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#3D3D3D] mb-2">Opportunities</h1>
          <p className="text-[#3D3D3D]/70">Track and manage your sales opportunities</p>
        </div>
        <Button className="bg-[#F7F7F7] hover:bg-[#EDEDED] text-[#3D3D3D] border border-[#3D3D3D]/20">
          <Plus className="w-4 h-4 mr-2" />
          New Opportunity
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="p-4 bg-[#F7F7F7] border-[#EDEDED]">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#3D3D3D]/40" />
            <Input 
              placeholder="Search opportunities..." 
              className="pl-10 bg-[#EDEDED] border-[#EDEDED] focus:border-[#3D3D3D]"
            />
          </div>
          <Button variant="outline" className="border-[#EDEDED] hover:bg-[#889870] hover:text-[#EDEDED]">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-[#F7F7F7] border-[#EDEDED]">
          <div className="space-y-2">
            <p className="text-sm text-[#3D3D3D]/70">Total Value</p>
            <p className="text-2xl font-bold text-[#3D3D3D]">$635K</p>
          </div>
        </Card>
        <Card className="p-4 bg-[#F7F7F7] border-[#EDEDED]">
          <div className="space-y-2">
            <p className="text-sm text-[#3D3D3D]/70">Active</p>
            <p className="text-2xl font-bold text-[#3D3D3D]">5</p>
          </div>
        </Card>
        <Card className="p-4 bg-[#F7F7F7] border-[#EDEDED]">
          <div className="space-y-2">
            <p className="text-sm text-[#3D3D3D]/70">Won This Month</p>
            <p className="text-2xl font-bold text-[#889870]">2</p>
          </div>
        </Card>
        <Card className="p-4 bg-[#F7F7F7] border-[#EDEDED]">
          <div className="space-y-2">
            <p className="text-sm text-[#3D3D3D]/70">Avg. Deal Size</p>
            <p className="text-2xl font-bold text-[#3D3D3D]">$127K</p>
          </div>
        </Card>
      </div>

      {/* Opportunities List */}
      <Card className="bg-[#F7F7F7] border-[#EDEDED]">
        <div className="p-6">
          <h3 className="text-lg font-bold text-[#3D3D3D] mb-4">Current Opportunities</h3>
          <div className="space-y-4">
            {opportunities.map((opportunity) => (
              <div 
                key={opportunity.id} 
                className="p-4 bg-[#EDEDED] rounded-lg hover:bg-[#EDEDED]/80 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-[#3D3D3D]">{opportunity.title}</h4>
                      <Badge className={getStatusColor(opportunity.status)}>
                        {opportunity.status}
                      </Badge>
                    </div>
                    <p className="text-[#3D3D3D]/70 mb-2">{opportunity.company}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#3D3D3D]/60">Stage: {opportunity.stage}</span>
                      <span className="text-[#3D3D3D]/60">Deadline: {opportunity.deadline}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-[#3D3D3D] mb-1">{opportunity.value}</p>
                    <p className={`text-sm font-medium ${getProbabilityColor(opportunity.probability)}`}>
                      {opportunity.probability}% probability
                    </p>
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