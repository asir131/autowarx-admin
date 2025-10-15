import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      
       <div className="min-h-screen">
       {children}
       </div>
     
    </section>
  );
};

export default MainLayout;
