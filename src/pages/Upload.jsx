import { UploadCloud } from "lucide-react";

export default function Upload() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl border shadow-sm p-8">
        {/* TITLE */}
        <h2 className="text-2xl font-semibold mb-2">Upload Exam Questions</h2>

        <p className="text-gray-500 mb-6">
          Upload a PDF, DOCX, or CSV file containing your exam questions for
          Bloom's Taxonomy analysis.
        </p>

        {/* DROP AREA */}
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:border-green-500 transition cursor-pointer">
          {/* ICON */}
          <div className="bg-gray-100 p-5 rounded-full mb-4">
            <UploadCloud className="text-green-600" size={28} />
          </div>

          <p className="font-medium text-gray-700">
            Drag & drop your file here
          </p>

          <p className="text-sm text-gray-500 mt-1">
            or click to browse · PDF, DOCX, CSV
          </p>

          {/* Hidden input */}
          <input type="file" className="hidden" />
        </div>
      </div>
    </div>
  );
}
