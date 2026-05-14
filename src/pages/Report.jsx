import { FileText, Download } from "lucide-react";

const data = [
  { name: "Remember", value: 3, percent: 15, color: "#3B82F6" },
  { name: "Understand", value: 4, percent: 20, color: "#06B6D4" },
  { name: "Apply", value: 4, percent: 20, color: "#10B981" },
  { name: "Analyze", value: 3, percent: 15, color: "#F59E0B" },
  { name: "Evaluate", value: 3, percent: 15, color: "#F97316" },
  { name: "Create", value: 3, percent: 15, color: "#8B5CF6" },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      {/* MAIN CARD */}
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        {/* HEADER */}
        <h2 className="text-xl font-semibold mb-1">Analysis Summary</h2>

        <p className="text-gray-500 text-sm mb-6">
          Report for: sample_exam_questions.pdf · 4/13/2026
        </p>

        {/* DISTRIBUTION */}
        <h3 className="font-semibold mb-4">Distribution Breakdown</h3>

        <div className="space-y-4">
          {data.map((item, i) => (
            <ProgressRow key={i} item={item} />
          ))}
        </div>

        {/* INSIGHTS */}
        <h3 className="font-semibold mt-6 mb-3">Key Insights</h3>

        <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm">
          <li>
            The exam is weighted toward lower-order thinking skills (Remember +
            Understand = 7 questions).
          </li>
          <li>
            Higher-order thinking (Analyze + Evaluate + Create) accounts for 9
            questions (45%).
          </li>
          <li>
            Consider adding more "Create" level questions for a balanced
            assessment.
          </li>
        </ul>
      </div>

      {/* EXPORT CARD */}
      <div className="bg-white p-6 rounded-2xl border shadow-sm">
        <h3 className="font-semibold mb-4">Export Report</h3>

        <div className="flex gap-4">
          <button className="flex-1 border rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50">
            <FileText size={18} />
            Download as PDF
          </button>

          <button className="flex-1 border rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50">
            <Download size={18} />
            Download as CSV
          </button>
        </div>
      </div>
    </div>
  );
}

function ProgressRow({ item }) {
  return (
    <div className="flex items-center gap-4">
      {/* LABEL */}
      <div className="w-28 text-sm text-gray-700">{item.name}</div>

      {/* BAR */}
      <div className="flex-1 bg-gray-200 h-3 rounded-full overflow-hidden">
        <div
          className="h-3 rounded-full"
          style={{
            width: `${item.percent}%`,
            backgroundColor: item.color,
          }}
        />
      </div>

      {/* VALUE */}
      <div className="w-20 text-sm text-gray-500 text-right">
        {item.value} ({item.percent}%)
      </div>
    </div>
  );
}
