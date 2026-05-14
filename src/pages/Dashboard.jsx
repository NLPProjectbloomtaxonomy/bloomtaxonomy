import { FileText, BarChart3, Eye, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Remember", value: 3 },
  { name: "Understand", value: 4 },
  { name: "Apply", value: 4 },
  { name: "Analyze", value: 3 },
  { name: "Evaluate", value: 3 },
  { name: "Create", value: 3 },
];

const COLORS = [
  "#3B82F6",
  "#06B6D4",
  "#10B981",
  "#F59E0B",
  "#F97316",
  "#8B5CF6",
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* TOP CARDS */}
      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Total Questions"
          value="20"
          subtitle="From latest upload"
          icon={<FileText />}
        />
        <StatCard
          title="Higher-Order"
          value="35%"
          subtitle="Analyze + Evaluate + Create"
          icon={<BarChart3 />}
        />
        <StatCard
          title="Files Analyzed"
          value="1"
          subtitle="Last: sample_exam.pdf"
          icon={<Eye />}
        />
        <StatCard
          title="Avg Confidence"
          value="85%"
          subtitle="Classification accuracy"
          icon={<TrendingUp />}
        />
      </div>

      {/* MAIN SECTION */}
      <div className="grid grid-cols-2 gap-6">
        {/* CHART */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h3 className="font-semibold mb-6">Bloom Level Distribution</h3>

          <div className="flex flex-col items-center">
            <PieChart width={260} height={260}>
              <Pie data={data} dataKey="value" innerRadius={70}>
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
            </PieChart>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {data.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-white text-sm"
                  style={{ backgroundColor: COLORS[i] }}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
          <h3 className="font-semibold">Quick Actions</h3>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">
            Upload New Question Set
          </button>

          <button className="w-full border py-3 rounded-lg flex items-center gap-2 justify-center hover:bg-gray-50">
            <Eye size={16} /> View Latest Analysis
          </button>

          <button className="w-full border py-3 rounded-lg flex items-center gap-2 justify-center hover:bg-gray-50">
            <BarChart3 size={16} /> View Charts
          </button>

          <button className="w-full border py-3 rounded-lg flex items-center gap-2 justify-center hover:bg-gray-50">
            <FileText size={16} /> Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, icon }) {
  return (
    <div className="bg-white p-5 rounded-2xl border shadow-sm flex justify-between items-start">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold mt-1">{value}</h2>
        <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
      </div>

      <div className="bg-gray-100 p-2 rounded-lg text-gray-600">{icon}</div>
    </div>
  );
}
