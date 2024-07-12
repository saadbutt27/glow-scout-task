import React from "react";

export function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-screen-xl mx-auto px-10">{children}</div>;
}

export default Wrapper;
