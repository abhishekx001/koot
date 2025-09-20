import React from "react";
import Navbar from "../components/Navbar";
import TherapyPage from "../components/TherapyPage";
import TherapistGrid from "../components/TherapistGrid";
import TherapyServices from "../components/TherapyServices";
import Footer from "../components/Footer";

const TherapistsPage = () => {
  return (
    <>
      <Navbar />
      <TherapyPage />
      <TherapistGrid />
      <TherapyServices />
      <Footer />
    </>
  );
};

export default TherapistsPage;
