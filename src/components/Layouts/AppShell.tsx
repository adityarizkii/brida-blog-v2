import React from "react";
import Header from "@/components/Fragments/Header";
import Footer from "@/components/Fragments/Footer";

type propsType = {
  children: React.ReactNode;
};

const AppShell = ({ children }: propsType) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppShell;
