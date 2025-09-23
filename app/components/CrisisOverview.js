import React from "react";

const CrisisOverview = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8 md:py-12" style={{fontFamily: 'var(--font-quicksand), sans-serif'}}>
      <div className="space-y-4 text-black">
        <h2 className="text-lg md:text-xl font-semibold">What is Crisis Intervention?</h2>
        <p className="text-xs md:text-sm leading-relaxed">
          Crisis intervention involves quickly using methods to help people stabilize during traumatic times. The goal is to offer medical support and a safe environment so individuals can manage their situation without making it worse.
        </p>
      </div>

      <div className="mt-8 space-y-4 text-black">
        <h2 className="text-lg md:text-xl font-semibold">What are the various kinds of abuse?</h2>
        <p className="text-xs md:text-sm leading-relaxed">
          Here are signs that someone might be going through a mental health crisis, grouped into broader categories:
        </p>

        <div className="space-y-6 text-xs md:text-sm leading-relaxed">
          <div>
            <p className="font-semibold mb-2">1. Emotional Distress:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Severe and persistent mood swings.</li>
              <li>Intense feelings of hopelessness or despair.</li>
              <li>Suicidal thoughts, intentions, or attempts.</li>
              <li>Extreme agitation, restlessness, or irritability.</li>
              <li>Severe <span className="text-blue-600 font-semibold">anxiety</span> or <span className="text-blue-600 font-semibold">panic attacks</span>.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">1. Cognitive Dysfunction:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Feeling lost or unsure about where you are, what time it is, or who you are.</li>
              <li>Inability to concentrate or make decisions.</li>
              <li>Hallucinations or delusions.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">1. Impaired Functioning:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Inability to perform daily tasks or self-care activities.</li>
              <li>Pulling away from social activities or hobbies they used to enjoy.</li>
              <li>Sudden and big changes in how someone acts or their personality.</li>
              <li>Feeling overwhelmed and struggling to handle stress.</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">1. Behavioral Changes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Engaging in risky or self-destructive behaviors.</li>
              <li>Intense and uncontrollable anger or aggression.</li>
              <li>Substance abuse or dependence issues.</li>
            </ul>
          </div>
        </div>

        <p className="text-xs md:text-sm leading-relaxed mt-6">
          If you or someone you know is experiencing these symptoms, it's important to get help quickly. Koott offers online counselling and diagnostic services with <span className="text-blue-600 font-semibold">Malayali psychologists</span> to provide effective support during mental health crises.
        </p>
      </div>

      {/* Causes of Crisis */}
      <div className="mt-10 space-y-4 text-black">
        <h2 className="text-lg md:text-xl font-semibold">Causes of Crisis: Understanding Why Individuals Experience Crisis?</h2>
        <ol className="list-decimal pl-6 space-y-4 text-xs md:text-sm leading-relaxed">
          <li>
            <span className="font-semibold">Traumatic Events:</span> Experiencing or witnessing traumatic events, such as accidents, natural disasters, violence, or <span className="text-blue-600 font-semibold">abuse</span>, can trigger a crisis.
          </li>
          <li>
            <span className="font-semibold">Mental Health Conditions:</span> Underlying mental health disorders, such as <span className="text-blue-600 font-semibold">depression</span>, <span className="text-blue-600 font-semibold">anxiety</span>, bipolar disorder, or <span className="text-blue-600 font-semibold">PTSD</span>, can predispose individuals to crisis situations.
          </li>
          <li>
            <span className="font-semibold">Substance Abuse:</span> Substance abuse or addiction issues can exacerbate existing mental health problems and lead to crisis situations.
          </li>
          <li>
            <span className="font-semibold">Life Transitions:</span> Big changes in life, like a divorce, losing someone close, losing a job, or moving to a new place, can make us feel unstable and upset, sometimes leading to a crisis.
          </li>
          <li>
            <span className="font-semibold">Chronic Stress:</span> Ongoing financial troubles, relationship issues, work stress, or persistent health problems can build up and lead people to a crisis.
          </li>
          <li>
            <span className="font-semibold">Lack of Coping Skills:</span> Inadequate coping mechanisms or poor problem-solving skills may leave individuals feeling overwhelmed when faced with challenging situations, leading to a crisis.
          </li>
        </ol>
      </div>

      {/* Types of Crisis Intervention */}
      <div className="mt-10 space-y-4 text-black">
        <h2 className="text-lg md:text-xl font-semibold">What are the Types of Crisis Intervention?</h2>
        <ol className="list-decimal pl-6 space-y-4 text-xs md:text-sm leading-relaxed">
          <li>
            <span className="font-semibold">Community-Based Crisis Intervention:</span> Community-based crisis intervention helps people in psychiatric emergencies who may need hospitalization to stay safe and get stable. This is especially important for those at risk of harming themselves, being violent, reacting to drugs, or dealing with psychotic disorders.
          </li>
          <li>
            <span className="font-semibold">Crisis Hotline:</span> Crisis hotlines offer immediate help to people in severe distress, including those thinking about suicide or feeling overwhelmed. Trained counselors provide support and reassurance over the phone, helping individuals focus on positive ways to cope and reducing the risk of self-harm.
          </li>
          <li>
            <span className="font-semibold">Critical Incident Stress Debriefing:</span> This intervention involves mental health experts going to places hit by traumatic events, like natural disasters or shootings, to offer immediate help and stop serious mental health problems, like <span className="text-blue-600 font-semibold">depression</span>, from developing among those affected.
          </li>
        </ol>
      </div>

      {/* Benefits of Crisis Intervention */}
      <div className="mt-10 space-y-4 text-black">
        <h2 className="text-lg md:text-xl font-semibold">What are the Benefits of Crisis Intervention?</h2>
        <p className="text-xs md:text-sm leading-relaxed">
          Crisis intervention helps by stabilizing individuals emotionally and giving them coping skills to handle their crises. By talking with trained therapists, people understand their challenges better and learn how to deal with them. Platforms like Koott offer support from online <span className="text-blue-600 font-semibold">Malayali psychologists</span> through online counseling during tough times.
        </p>
      </div>

      {/* Non-Violent Crisis Intervention */}
      <div className="mt-10 space-y-4 text-black">
        <h2 className="text-lg md:text-xl font-semibold">What is Non-Violent Crisis Intervention?</h2>
        <p className="text-xs md:text-sm leading-relaxed">
          Non-Violent Crisis Intervention involves trained people helping individuals in crises that affect their behavior. They use specific skills to support and care for those who may be self-harming or posing a danger to others. Their goal is to prevent harm, calm tense situations, ensure safety, and, if needed, step in physically to protect people or property.
        </p>
      </div>

      {/* Effective Techniques for Crisis Intervention */}
      <div className="mt-10 space-y-4 text-black">
        <h2 className="text-lg md:text-xl font-semibold">What are some Effective Techniques for Crisis Intervention?</h2>
        <ol className="list-decimal pl-6 space-y-4 text-xs md:text-sm leading-relaxed">
          <li>
            <span className="font-semibold">Identify the Issue:</span> Crisis intervention services start by figuring out the issue and encouraging open talks to help people share their feelings and thoughts. For instance, a crisis counselor might assist someone in a mental health crisis to recognize their triggers and find ways to cope.
          </li>
          <li>
            <span className="font-semibold">Ensure Physical Safety:</span> Crisis situations may lead to irrational behaviors, posing risks to physical safety. It's crucial to take immediate steps to ensure the safety of everyone involved. For instance, in cases of domestic violence, crisis intervention teams work to remove the victim from the dangerous environment and provide them with a safe haven.
          </li>
          <li>
            <span className="font-semibold">Provide Immediate Support:</span> Offering support and positive communication helps individuals make rational decisions instead of acting impulsively. Crisis intervention counselors use affirmations to promote positive perspectives. For example, a crisis hotline volunteer might help someone in distress by listening carefully to their problems and showing kindness and support.
          </li>
          <li>
            <span className="font-semibold">Focus on Alternatives:</span> Crisis intervention assists people in finding different ways to improve their thinking, productivity, and life perspective. This can include coming up with new coping methods or looking for additional support like support groups or therapy.
          </li>
          <li>
            <span className="font-semibold">Commitment to a Plan:</span> Specialists maintain ongoing contact with individuals and assist them in creating plans to foster positive life changes. Continuous communication and support are essential for individuals to function effectively in various aspects of life. For instance, a crisis intervention team may develop a safety plan with a person at risk of self-harm, outlining steps to take during moments of crisis and identifying resources for ongoing support.
          </li>
        </ol>
      </div>

      {/* Supporting Someone in Crisis */}
      <div className="mt-10 space-y-4 text-black">
        <h2 className="text-lg md:text-xl font-semibold">Supporting Someone in Crisis: Effective Ways to Offer Help</h2>
        <p className="text-xs md:text-sm leading-relaxed">Supporting someone going through a crisis involves:</p>
        <ol className="list-decimal pl-6 space-y-2 text-xs md:text-sm leading-relaxed">
          <li><span className="font-semibold">Listening:</span> Providing a listening ear without judgment or interruption.</li>
          <li><span className="font-semibold">Validating:</span> Recognizing that their feelings and experiences are valid and make sense.</li>
          <li><span className="font-semibold">Empathizing:</span> Trying to understand their perspective and showing empathy for what they're going through.</li>
          <li><span className="font-semibold">Reassuring:</span> Offering reassurance that they are not alone and that help is available.</li>
          <li><span className="font-semibold">Encouraging:</span> If you’re struggling, please consider getting help from a professional or calling a crisis hotline for support.</li>
          <li><span className="font-semibold">Assisting:</span> Offering hands-on help, like finding resources for them or going with them to appointments.</li>
          <li><span className="font-semibold">Respecting:</span> Respecting their boundaries and autonomy, while still letting them know you're there for them.</li>
          <li><span className="font-semibold">Following Up:</span> Checking in with them regularly to see how they're doing and offering ongoing support as needed.</li>
        </ol>
      </div>

      {/* How to Seek Help */}
      <div className="mt-10 space-y-4 text-black">
        <h2 className="text-lg md:text-xl font-semibold">How to Seek Help?</h2>
        <p className="text-xs md:text-sm leading-relaxed">
          If you notice someone you care about struggling with their mental health, it's important to encourage them to seek help. Competent and reliable crisis intervention counselors are available, offering online counseling sessions with affordable rates. This makes it easier for them to access the support they need from a <span className="text-blue-600 font-semibold">Malayali psychologist</span>.
        </p>
      </div>

      {/* Reviewed by */}
      <div className="mt-10">
        <div className="bg-white rounded-lg p-4 flex items-center justify-between shadow-xs border border-gray-200">
          <div>
            <p className="font-semibold text-black text-sm mb-1">Reviewed by:</p>
            <p className="text-black text-sm">Shuhaima Hanna Katti, Health Psychologist</p>
          </div>
          <button className="bg-white hover:bg-gray-50 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-gray-300">
            Send a message
          </button>
        </div>
      </div>
    </section>
  );
};

export default CrisisOverview;


