import {
  LayoutDashboard,
  Upload,
  BarChart3,
  LineChart,
  Lightbulb,
  FileText,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Upload", path: "/upload", icon: Upload },
  { name: "Analysis", path: "/analysis", icon: BarChart3 },
  { name: "Visualization", path: "/visualization", icon: LineChart },
  { name: "Recommendations", path: "/recommendations", icon: Lightbulb },
  { name: "Reports", path: "/reports", icon: FileText },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r px-5 py-6 flex flex-col">
      {/* LOGO */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-green-600 text-white p-2 rounded-xl">🎓</div>
        <div>
          <h1 className="font-semibold text-lg">BloomLens</h1>
          <p className="text-sm text-gray-500">Exam Analyzer</p>
        </div>
      </div>

      {/* NAVIGATION */}
      <div>
        <p className="text-xs text-gray-400 mb-3">Navigation</p>

        <div className="space-y-1">
          {menu.map((item) => {
            const Icon = item.icon;

            const isActive =
              location.pathname === item.path ||
              (item.path !== "/" && location.pathname.startsWith(item.path));

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-green-100 text-green-700 border border-green-200"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
