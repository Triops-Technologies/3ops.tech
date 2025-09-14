import { useState } from "react";
import { Header } from "./components/Header";
import { Dashboard } from "./components/views/Dashboard";
import { Calendar } from "./components/views/Calendar";
import { Opportunities } from "./components/views/Opportunities";
import { Archives } from "./components/views/Archives";

export default function App() {
  const [activeView, setActiveView] = useState("dashboard");

  const renderActiveView = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />;
      case "calendar":
        return <Calendar />;
      case "opportunities":
        return <Opportunities />;
      case "archives":
        return <Archives />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full bg-[#F7F7F7]">
      <Header activeView={activeView} onViewChange={setActiveView} />
      <main className="flex-1">
        {renderActiveView()}
      </main>
    </div>
  );
}