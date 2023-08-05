import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100vh-612px)] bg-white">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
