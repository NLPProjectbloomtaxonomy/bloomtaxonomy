import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <Moon size={18} className="text-gray-600 cursor-pointer" />

        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
          ED
        </div>
      </div>
    </div>
  );
}
