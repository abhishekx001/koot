import React from "react";
import Navbar from "../components/Navbar";
import EatingDisorderPage from "../components/EatingDisorderPage";
import EatingDisorderSymptoms from "../components/EatingDisorderSymptoms";
import MalayaliTherapists from "../components/MalayaliTherapists";
import EatingDisorderJourneySection from "../components/EatingDisorderJourneySection";
import TestimonialsSection from "../components/TestimonialsSection";
import DepressionFaq from "../components/DepressionFaq";
import HypochondriasisOverview from "../components/HypochondriasisOverview";
import MalayaliPsychologists from "../components/MalayaliPsychologists";
import RelatedConditions from "../components/RelatedConditions";
import DepressionBlogs from "../components/DepressionBlogs";
import BeginToday from "../components/BeginToday";
import Footer from "../components/Footer";

const Hypochondriasis = () => {
  return (
    <>
      <Navbar />
      <EatingDisorderPage />
      <EatingDisorderSymptoms />
      <MalayaliTherapists />
      <EatingDisorderJourneySection />
      <BeginToday />
      <TestimonialsSection />
      <DepressionFaq />
      <div id="what-is-hypochondriasis">
        <HypochondriasisOverview />
      </div>
      <MalayaliPsychologists />
      <RelatedConditions />
      <DepressionBlogs />
      <Footer />
    </>
  );
};

export default Hypochondriasis;
