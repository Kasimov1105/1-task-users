import React from "react";

export default function layout({ children, studentPofile}: { children: React.ReactNode, studentPofile:React.ReactNode }) {
  return (
    <div className="layout">
      <h2>Students layout</h2>
      {children}
      {studentPofile}
    </div>
  );
}
