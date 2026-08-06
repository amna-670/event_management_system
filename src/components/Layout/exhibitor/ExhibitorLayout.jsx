import React from "react";
import ExhibitorSidebar from "./ExhibitorSidebar";

const ExhibitorLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <ExhibitorSidebar />

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default ExhibitorLayout;