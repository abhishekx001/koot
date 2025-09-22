import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AbusePage from "../components/AbusePage";
import DepressionSymptoms from "../components/DepressionSymptoms";
import MalayaliTherapists from "../components/MalayaliTherapists";
import JourneySection from "../components/JourneySection";
import BeginToday from "../components/BeginToday";
import TestimonialsSection from "../components/TestimonialsSection";
import DepressionFaq from "../components/DepressionFaq";
import AbuseOverview from "../components/AbuseOverview";
import MalayaliPsychologists from "../components/MalayaliPsychologists";
import RelatedConditions from "../components/RelatedConditions";
import DepressionBlogs from "../components/DepressionBlogs";

export default function AbuseRoute() {
  return (
    <div>
      <Navbar />
      <AbusePage />
      <DepressionSymptoms />
      <MalayaliTherapists />
      <JourneySection />
      <BeginToday />
      <TestimonialsSection />
      <DepressionFaq />
      <div id="what-is-abuse">
        <AbuseOverview />
      </div>
      <MalayaliPsychologists />
      <RelatedConditions />
      <DepressionBlogs />
      <Footer />
    </div>
  );
}


