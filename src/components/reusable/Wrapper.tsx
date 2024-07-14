import React from "react";

// This reusable component is a wrapper
// Its purpose is to wrap all the pages and components to show a uniform UI
export function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-screen-xl mx-auto px-10">{children}</div>;
}

export default Wrapper;
