import React from "react";
import TherapistCard from "./TherapistCard";

const TherapistGrid = () => {
  // Sample therapist data - you can replace this with real data from an API
  const therapists = [
    {
      id: 1,
      name: "Aswathy Usha Raman",
      title: "Chief Consultant Psychologist",
      experience: "8+ years of experience",
      languages: "Malayalam & English",
      startingPrice: "Starting from INR2299",
      image: "/phsycologst1",
      description: "M Phil & PhD scholar and university topper, she specializes in individual therapy, relationship therapy, and complex disorders. With a holistic, evidence-based approach, she has led 20+ impactful workshops on mental health across communities.",
      availability: "September 26 (13:00)"
    },
    {
      id: 2,
      name: "Dr. Priya Menon",
      title: "Senior Clinical Psychologist",
      experience: "12+ years of experience",
      languages: "Malayalam, English & Hindi",
      startingPrice: "Starting from INR1899",
      image: "/phsycologst1",
      description: "Specialized in cognitive behavioral therapy and trauma counseling. She has extensive experience working with adolescents and adults dealing with anxiety, depression, and relationship issues. Known for her compassionate approach and evidence-based treatment methods.",
      availability: "September 27 (10:30)"
    },
    {
      id: 3,
      name: "Dr. Rajesh Kumar",
      title: "Licensed Clinical Psychologist",
      experience: "15+ years of experience",
      languages: "Malayalam, English & Tamil",
      startingPrice: "Starting from INR2199",
      image: "/phsycologst1",
      description: "Expert in family therapy and child psychology with extensive experience in behavioral interventions. He has successfully treated over 500 families and specializes in ADHD, autism spectrum disorders, and learning disabilities.",
      availability: "September 28 (14:30)"
    },
    {
      id: 4,
      name: "Dr. Sarah Thomas",
      title: "Counseling Psychologist",
      experience: "6+ years of experience",
      languages: "Malayalam & English",
      startingPrice: "Starting from INR1799",
      image: "/phsycologst1",
      description: "Specializes in anxiety disorders, depression, and stress management. She uses evidence-based techniques including CBT and mindfulness-based interventions. Known for her warm, empathetic approach and high success rates.",
      availability: "September 29 (11:00)"
    },
    {
      id: 5,
      name: "Dr. Anil Nair",
      title: "Senior Psychologist",
      experience: "10+ years of experience",
      languages: "Malayalam, English & Hindi",
      startingPrice: "Starting from INR2099",
      image: "/phsycologst1",
      description: "Expert in couples therapy and relationship counseling. He has helped hundreds of couples rebuild their relationships using Gottman Method and Emotionally Focused Therapy. Also specializes in pre-marital counseling.",
      availability: "September 30 (16:00)"
    },
    {
      id: 6,
      name: "Dr. Meera Krishnan",
      title: "Clinical Psychologist",
      experience: "9+ years of experience",
      languages: "Malayalam & English",
      startingPrice: "Starting from INR1999",
      image: "/phsycologst1",
      description: "Specializes in trauma therapy and PTSD treatment. She uses EMDR, cognitive processing therapy, and other evidence-based approaches. Has extensive experience working with survivors of abuse and trauma.",
      availability: "October 1 (09:30)"
    },
    {
      id: 7,
      name: "Dr. Suresh Pillai",
      title: "Behavioral Psychologist",
      experience: "13+ years of experience",
      languages: "Malayalam, English & Tamil",
      startingPrice: "Starting from INR2299",
      image: "/phsycologst1",
      description: "Expert in behavioral modification and addiction counseling. He has successfully treated substance abuse, gambling addiction, and behavioral disorders. Uses motivational interviewing and cognitive-behavioral techniques.",
      availability: "October 2 (15:00)"
    },
    {
      id: 8,
      name: "Dr. Lakshmi Devi",
      title: "Child & Adolescent Psychologist",
      experience: "7+ years of experience",
      languages: "Malayalam & English",
      startingPrice: "Starting from INR1899",
      image: "/phsycologst1",
      description: "Specializes in child psychology and adolescent mental health. She works with children aged 5-18 and their families, addressing issues like school anxiety, bullying, and developmental disorders.",
      availability: "October 3 (10:00)"
    },
    {
      id: 9,
      name: "Dr. Ravi Chandran",
      title: "Neuropsychologist",
      experience: "11+ years of experience",
      languages: "Malayalam, English & Hindi",
      startingPrice: "Starting from INR2499",
      image: "/phsycologst1",
      description: "Expert in neuropsychological assessment and cognitive rehabilitation. He works with patients with brain injuries, dementia, and cognitive impairments. Uses advanced assessment tools and rehabilitation techniques.",
      availability: "October 4 (13:30)"
    },
    {
      id: 10,
      name: "Dr. Kavitha Suresh",
      title: "Health Psychologist",
      experience: "8+ years of experience",
      languages: "Malayalam & English",
      startingPrice: "Starting from INR1999",
      image: "/phsycologst1",
      description: "Specializes in health psychology and chronic illness management. She helps patients cope with diabetes, cancer, heart disease, and other chronic conditions through psychological interventions and lifestyle modifications.",
      availability: "October 5 (14:00)"
    },
    {
      id: 11,
      name: "Dr. Gopal Menon",
      title: "Forensic Psychologist",
      experience: "14+ years of experience",
      languages: "Malayalam, English & Tamil",
      startingPrice: "Starting from INR2399",
      image: "/phsycologst1",
      description: "Expert in forensic psychology and criminal behavior assessment. He provides psychological evaluations for legal cases and works with law enforcement agencies. Also specializes in risk assessment and rehabilitation.",
      availability: "October 6 (11:30)"
    },
    {
      id: 12,
      name: "Dr. Sunitha Rajan",
      title: "Educational Psychologist",
      experience: "9+ years of experience",
      languages: "Malayalam & English",
      startingPrice: "Starting from INR1899",
      image: "/phsycologst1",
      description: "Specializes in educational psychology and learning disabilities. She works with students, teachers, and parents to address academic challenges, learning disorders, and educational planning. Uses comprehensive assessment and intervention strategies.",
      availability: "October 7 (16:30)"
    },
    {
      id: 13,
      name: "Dr. Mohan Das",
      title: "Sports Psychologist",
      experience: "6+ years of experience",
      languages: "Malayalam, English & Hindi",
      startingPrice: "Starting from INR2199",
      image: "/phsycologst1",
      description: "Expert in sports psychology and performance enhancement. He works with athletes, coaches, and sports teams to improve performance, manage competition anxiety, and develop mental toughness. Uses visualization and goal-setting techniques.",
      availability: "October 8 (12:00)"
    },
    {
      id: 14,
      name: "Dr. Indira Nair",
      title: "Geriatric Psychologist",
      experience: "12+ years of experience",
      languages: "Malayalam & English",
      startingPrice: "Starting from INR2099",
      image: "/phsycologst1",
      description: "Specializes in geriatric psychology and aging-related mental health issues. She works with elderly patients and their families, addressing depression, anxiety, dementia, and end-of-life concerns. Uses person-centered and family therapy approaches.",
      availability: "October 9 (15:30)"
    },
    {
      id: 15,
      name: "Dr. Vinod Kumar",
      title: "Rehabilitation Psychologist",
      experience: "10+ years of experience",
      languages: "Malayalam, English & Tamil",
      startingPrice: "Starting from INR1999",
      image: "/phsycologst1",
      description: "Expert in rehabilitation psychology and disability counseling. He works with patients recovering from injuries, strokes, and other disabilities. Focuses on psychological adjustment, coping strategies, and vocational rehabilitation.",
      availability: "October 10 (09:00)"
    },
    {
      id: 16,
      name: "Dr. Radha Krishnan",
      title: "Community Psychologist",
      experience: "11+ years of experience",
      languages: "Malayalam & English",
      startingPrice: "Starting from INR1899",
      image: "/phsycologst1",
      description: "Specializes in community psychology and social interventions. She works with communities, organizations, and groups to address social issues, mental health awareness, and community-based interventions. Focuses on prevention and early intervention.",
      availability: "October 11 (14:30)"
    },
    {
      id: 17,
      name: "Dr. Preethi Suresh",
      title: "Industrial Psychologist",
      experience: "8+ years of experience",
      languages: "Malayalam, English & Hindi",
      startingPrice: "Starting from INR2299",
      image: "/phsycologst1",
      description: "Expert in industrial psychology and workplace mental health. She works with organizations to improve employee well-being, reduce workplace stress, and enhance productivity. Specializes in organizational development and employee assistance programs.",
      availability: "October 12 (10:30)"
    },
    {
      id: 18,
      name: "Dr. Arun Pillai",
      title: "Research Psychologist",
      experience: "15+ years of experience",
      languages: "Malayalam, English & Tamil",
      startingPrice: "Starting from INR2499",
      image: "/phsycologst1",
      description: "Expert in research psychology and psychological assessment. He conducts psychological research, develops assessment tools, and provides evidence-based interventions. Specializes in psychometrics, research methodology, and data analysis.",
      availability: "October 13 (13:00)"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 -mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {therapists.map((therapist) => (
          <TherapistCard key={therapist.id} therapist={therapist} />
        ))}
      </div>
    </div>
  );
};

export default TherapistGrid;
