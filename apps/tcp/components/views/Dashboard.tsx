import { Card } from "../ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#3D3D3D] mb-2">Dashboard</h1>
        <p className="text-[#3D3D3D]/70">Welcome to your TCP dashboard overview</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-[#F7F7F7] border-[#EDEDED]">
          <div className="space-y-2">
            <p className="text-sm text-[#3D3D3D]/70">Total Opportunities</p>
            <p className="text-3xl font-bold text-[#3D3D3D]">127</p>
            <p className="text-sm text-[#889870]">+12% from last month</p>
          </div>
        </Card>

        <Card className="p-6 bg-[#F7F7F7] border-[#EDEDED]">
          <div className="space-y-2">
            <p className="text-sm text-[#3D3D3D]/70">Active Projects</p>
            <p className="text-3xl font-bold text-[#3D3D3D]">23</p>
            <p className="text-sm text-[#8B0000]">-3% from last month</p>
          </div>
        </Card>

        <Card className="p-6 bg-[#F7F7F7] border-[#EDEDED]">
          <div className="space-y-2">
            <p className="text-sm text-[#3D3D3D]/70">Revenue</p>
            <p className="text-3xl font-bold text-[#3D3D3D]">$45,230</p>
            <p className="text-sm text-[#889870]">+8% from last month</p>
          </div>
        </Card>
      </div>

      {/* Chart */}
      <Card className="p-6 bg-[#F7F7F7] border-[#EDEDED]">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#3D3D3D]">Monthly Performance</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#EDEDED" />
                <XAxis dataKey="name" stroke="#3D3D3D" />
                <YAxis stroke="#3D3D3D" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#F7F7F7', 
                    border: '1px solid #EDEDED',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="value" fill="#F7F7F7" stroke="#3D3D3D" strokeWidth={1} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6 bg-[#F7F7F7] border-[#EDEDED]">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#3D3D3D]">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-[#EDEDED] rounded">
              <div>
                <p className="font-medium text-[#3D3D3D]">New opportunity added</p>
                <p className="text-sm text-[#3D3D3D]/70">Enterprise Software Solution</p>
              </div>
              <span className="text-sm text-[#3D3D3D]/60">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#EDEDED] rounded">
              <div>
                <p className="font-medium text-[#3D3D3D]">Project milestone completed</p>
                <p className="text-sm text-[#3D3D3D]/70">Mobile App Development</p>
              </div>
              <span className="text-sm text-[#3D3D3D]/60">5 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#EDEDED] rounded">
              <div>
                <p className="font-medium text-[#3D3D3D]">Client meeting scheduled</p>
                <p className="text-sm text-[#3D3D3D]/70">Tech Innovations Corp</p>
              </div>
              <span className="text-sm text-[#3D3D3D]/60">1 day ago</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}