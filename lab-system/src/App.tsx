import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComputerManagement from "./pages/ComputerManagement";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComputerManagement />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
