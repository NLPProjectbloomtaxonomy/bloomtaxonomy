import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Analysis from "./pages/Analysis";
import Upload from "./pages/Upload";
import Visualization from "./pages/Visualization";
import Recommendations from "./pages/Recommendation";
import Reports from "./pages/Report";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
