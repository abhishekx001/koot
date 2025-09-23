"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CrisisInterventionPage from "../components/CrisisInterventionPage";
import CrisisSymptoms from "../components/CrisisSymptoms";
import MalayaliTherapists from "../components/MalayaliTherapists";
import CrisisJourneySection from "../components/CrisisJourneySection";
import BeginToday from "../components/BeginToday";
import TestimonialsSection from "../components/TestimonialsSection";
import CrisisFaq from "../components/CrisisFaq";
import CrisisOverview from "../components/CrisisOverview";
import MalayaliPsychologists from "../components/MalayaliPsychologists";
import RelatedConditions from "../components/RelatedConditions";
import DepressionBlogs from "../components/DepressionBlogs";

export default function CrisisInterventionRoute() {
  return (
    <div>
      <Navbar />
      <CrisisInterventionPage />
      <CrisisSymptoms />
      <MalayaliTherapists />
      <CrisisJourneySection />
      <BeginToday />
      <TestimonialsSection />
      <CrisisFaq />
      <div id="what-is-crisis-intervention">
        <CrisisOverview />
      </div>
      <MalayaliPsychologists />
      <RelatedConditions 
        title="Related Conditions for Keralite's"
        items={[
          "OCD",
          "Career Coach",
          "PTSD",
          "Anxiety",
          "Autistic Spectrum",
          "Communication",
          "Existential Crisis",
          "Premarital Counselling",
        ]}
      />
      <DepressionBlogs />
      <Footer />
    </div>
  );
}


