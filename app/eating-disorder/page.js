import React from "react";
import Navbar from "../components/Navbar";
import EatingDisorderPage from "../components/EatingDisorderPage";
import EatingDisorderSymptoms from "../components/EatingDisorderSymptoms";
import MalayaliTherapists from "../components/MalayaliTherapists";
import EatingDisorderJourneySection from "../components/EatingDisorderJourneySection";
import TestimonialsSection from "../components/TestimonialsSection";
import EatingDisorderFaq from "../components/EatingDisorderFaq";
import EatingDisorderOverview from "../components/EatingDisorderOverview";
import MalayaliPsychologists from "../components/MalayaliPsychologists";
import RelatedConditions from "../components/RelatedConditions";
import DepressionBlogs from "../components/DepressionBlogs";
import BeginToday from "../components/BeginToday";
import Footer from "../components/Footer";

const EatingDisorder = () => {
  return (
    <>
      <Navbar />
      <EatingDisorderPage />
      <EatingDisorderSymptoms />
      <MalayaliTherapists />
      <EatingDisorderJourneySection />
      <BeginToday />
      <TestimonialsSection />
      <EatingDisorderFaq />
      <div id="what-is-eating-disorder">
        <EatingDisorderOverview />
      </div>
      <MalayaliPsychologists />
      <RelatedConditions />
      <DepressionBlogs />
      <Footer />
    </>
  );
};

export default EatingDisorder;
