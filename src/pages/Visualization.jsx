import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

export default function Visualization() {
  return (
    <div className="space-y-6">
      {/* TOP GRID */}
      <div className="grid grid-cols-2 gap-6">
        {/* DONUT CHART */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h3 className="font-semibold text-lg mb-1">
            Bloom Level Distribution
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Proportion of questions per cognitive level
          </p>

          <div className="flex flex-col items-center">
            <PieChart width={260} height={260}>
              <Pie data={data} dataKey="value" innerRadius={70}>
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
            </PieChart>

            {/* LABELS */}
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {data.map((item, i) => (
                <span
                  key={i}
                  className="text-sm font-medium"
                  style={{ color: COLORS[i] }}
                >
                  {item.name} {Math.round((item.value / 20) * 100)}%
                </span>
              ))}
            </div>

            {/* LEGEND */}
            <div className="flex flex-wrap justify-center gap-4 mt-3 text-sm">
              {data.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: COLORS[i] }}
                  />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BAR CHART */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h3 className="font-semibold text-lg mb-1">
            Cognitive Level Comparison
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Number of questions at each Bloom level
          </p>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* PYRAMID */}
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <h3 className="font-semibold text-lg mb-6">Bloom's Taxonomy Pyramid</h3>

        <div className="flex flex-col items-center space-y-3">
          <PyramidBar label="Create (3)" width="40%" color="#8B5CF6" />
          <PyramidBar label="Evaluate (3)" width="55%" color="#F97316" />
          <PyramidBar label="Analyze (3)" width="70%" color="#F59E0B" />
          <PyramidBar label="Apply (4)" width="85%" color="#10B981" />
          <PyramidBar label="Understand (4)" width="95%" color="#06B6D4" />
          <PyramidBar label="Remember (3)" width="100%" color="#3B82F6" />
        </div>
      </div>
    </div>
  );
}

function PyramidBar({ label, width, color }) {
  return (
    <div
      className="text-white text-center py-2 rounded-lg font-medium"
      style={{ width, backgroundColor: color }}
    >
      {label}
    </div>
  );
}
