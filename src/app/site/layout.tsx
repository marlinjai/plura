import Navigation from "@/components/site/Navigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" h-full">
      <Navigation></Navigation>
      {children}
    </main>
  );
};

export default layout;
