import { AlertTriangle, Info, CheckCircle } from "lucide-react";

export default function Recommendations() {
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Recommendations</h2>
        <p className="text-gray-500">
          AI-generated suggestions to improve your exam's cognitive level
          coverage.
        </p>
      </div>

      {/* CARDS */}
      <div className="space-y-4">
        {/* WARNING CARD */}
        <RecommendationCard
          type="warning"
          icon={<AlertTriangle size={18} />}
          title="Overemphasis on Lower-Order Thinking"
          description="35% of questions target 'Remember' and 'Understand' levels. Consider reducing to 20–25% and adding more higher-order questions."
          suggestion="Replace some recall questions with analysis or evaluation prompts."
        />

        {/* INFO CARD */}
        <RecommendationCard
          type="info"
          icon={<Info size={18} />}
          title="Good Coverage of Application Level"
          description="20% of questions require students to apply knowledge, which is well-balanced for most courses."
          suggestion="Maintain current balance of application questions."
        />

        {/* WARNING CARD */}
        <RecommendationCard
          type="warning"
          icon={<AlertTriangle size={18} />}
          title="Limited Creative Thinking Questions"
          description="Only 15% of questions reach the 'Create' level. For advanced courses, aim for 20–25%."
          suggestion="Add open-ended design or project-based questions."
        />

        {/* SUCCESS CARD */}
        <RecommendationCard
          type="success"
          icon={<CheckCircle size={18} />}
          title="Balanced Subject Distribution"
          description="Questions span multiple subjects effectively, providing interdisciplinary assessment."
          suggestion="Continue maintaining diversity across topics."
        />
      </div>
    </div>
  );
}

function RecommendationCard({ type, icon, title, description, suggestion }) {
  const styles = {
    warning: "bg-yellow-50 border-yellow-400",
    info: "bg-blue-50 border-blue-400",
    success: "bg-green-50 border-green-400",
  };

  return (
    <div className={`border-l-4 p-5 rounded-xl border ${styles[type]}`}>
      <div className="flex items-start gap-3">
        {/* ICON */}
        <div className="mt-1 text-gray-600">{icon}</div>

        {/* CONTENT */}
        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>

          <p className="text-gray-600 mt-1 text-sm">{description}</p>

          <p className="mt-2 text-sm font-medium text-gray-800 flex items-center gap-2">
            💡 {suggestion}
          </p>
        </div>
      </div>
    </div>
  );
}
