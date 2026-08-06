import React from "react";
import AttendeeSidebar from "./AttendeeSidebar";

const AttendeeLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <AttendeeSidebar />

      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default AttendeeLayout;