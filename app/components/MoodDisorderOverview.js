"use client";
import React from "react";

const MoodDisorderOverview = () => {
  return (
    <div
      className="flex justify-center items-center py-16 px-4 bg-white"
      style={{
        fontFamily: 'var(--font-quicksand), sans-serif',
      }}
    >
      <div className="w-full max-w-4xl">
        {/* Section 1: What is Mood Disorder? */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            What is Mood Disorder?
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-sm">
            <p>
              Kerala and India face concerning rates of mood disorders. In Kerala, 6.22% of the population experiences mood disorders in their lifetime, with depression affecting 5.54%. Despite progressive social indicators, factors like family shifts, economic strain, and substance abuse are linked. India paints a similar picture, with a 13.67% lifetime prevalence of psychiatric disorders. Stigma, limited access to care, and poverty further complicate matters.
            </p>
            
            <p>
              Remember, early intervention and professional support are crucial. Recognizing the signs of mood disorder is the first step. Taking proactive steps, like reaching out to top Malayali counselors for mood disorder treatment, is crucial to ease symptoms and start the journey to healing. In the journey to overcome mood disorder, compassionate support from skilled <span className="text-blue-600 font-semibold">Malayali psychologists</span> and counselors can make all the difference.
            </p>
          </div>
        </div>

        {/* Section 2: What are the Symptoms of Mood Disorder? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            What are the Symptoms of Mood Disorder?
          </h2>
          
          <p className="text-black leading-relaxed mb-6 text-sm">
            People going through mood disorders might show a range of symptoms, varying from milder to more severe. Common signs of mood disorder can include:
          </p>
          
          <div className="space-y-8">
            {/* Emotional Rollercoaster */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4">
                Emotional Rollercoaster:
              </h3>
              <ul className="space-y-3 text-black leading-tight text-sm">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Persistent sadness, emptiness, or anxiety:</span> Beyond occasional blues, this lingers even in good situations.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Hopelessness, helplessness, or worthlessness:</span> Feeling like things will never get better or you're not good enough.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Irritability, anger, or aggression:</span> Frequent outbursts or intense negative emotions that overshadow everyday interactions.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Loss of interest or pleasure:</span> Activities once enjoyed become uninteresting or unrewarding.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Suicidal thoughts or urges:</span> If you find yourself thinking about or planning suicide, please reach out for help immediately.
                  </div>
                </li>
              </ul>
            </div>

            {/* Behavioral Shifts */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4">
                Behavioral Shifts:
              </h3>
              <ul className="space-y-3 text-black leading-tight text-sm">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Sleep disturbances:</span> Significant changes in sleep patterns, like sleeping too much or too little, despite efforts to regulate.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Appetite and weight changes:</span> Noticeable weight loss or gain without trying, potentially linked to decreased or increased appetite.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Concentration and decision-making difficulties:</span> Feeling foggy, struggling to focus, or having trouble making even simple choices.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Low energy or fatigue:</span> Feeling constantly drained, even after adequate rest.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Restlessness or agitation:</span> Feeling wired or unable to relax, even when trying.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Social withdrawal or isolation:</span> Staying away from social activities or losing interest in things you once loved.
                  </div>
                </li>
              </ul>
            </div>

            {/* Physical Ailments */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4">
                Physical Ailments:
              </h3>
              <ul className="space-y-3 text-black leading-tight text-sm">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Unexplained aches and pains:</span> Chronic pain with no identifiable cause.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Headaches or stomachaches:</span> Frequent headaches or digestive issues that haven't responded to treatment.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Changes in sex drive:</span> Noticeable change in sexual desire, either much lower or higher.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: What Causes Mood Disorder? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            What Causes Mood Disorder?
          </h2>
          
          <p className="text-black leading-relaxed mb-6 text-sm">
            While we don't know the exact cause, mood disorders like depression and bipolar disorder likely come from a mix of different factors. Let's explore the main contributors to understand this complex issue better.
          </p>
          
          <div className="space-y-8">
            {/* Biological whispers */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4">
                Biological whispers:
              </h3>
              <ul className="space-y-3 text-black leading-tight text-sm">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Brain's chemical orchestra:</span> Disruptions in the harmony of neurotransmitters like serotonin, dopamine, and norepinephrine can lead to emotional turbulence.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Genetic blueprint:</span> Having a family history subtly elevates your risk, hinting at a genetic influence.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Medical undercurrents:</span> Health problems like thyroid issues, chronic pain, or brain tumors can affect your mood.
                  </div>
                </li>
              </ul>
            </div>

            {/* Psychological echoes */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4">
                Psychological echoes:
              </h3>
              <ul className="space-y-3 text-black leading-tight text-sm">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Life's curveballs:</span> Traumatic experiences, significant shifts, and chronic stress can overwhelm coping mechanisms, triggering mood imbalances.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Negative thought spirals:</span> Self-criticism, pessimism, and dwelling on negative thoughts can fuel and worsen symptoms.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Personality's unique canvas:</span> Traits like neuroticism or perfectionism might make individuals more susceptible to mood fluctuations.
                  </div>
                </li>
              </ul>
            </div>

            {/* Social and environmental landscapes */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4">
                Social and environmental landscapes:
              </h3>
              <ul className="space-y-3 text-black leading-tight text-sm">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Socioeconomic shadows:</span> Poverty, limited resources, and social inequalities can cast a shadow of stress and vulnerability.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Childhood's scars:</span> Early trauma and neglect can leave lasting imprints, increasing the risk of future mood disorders.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Substance's deceptive allure:</span> Alcohol, drugs, and other substances can trigger or worsen mood problems, making things more complicated.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-black leading-relaxed mt-6 text-sm">
            Remember to get help, our Koott Listeners are a click away.
          </p>
        </div>

        {/* Section 4: Types of Mood Disorders */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            Types of Mood Disorders
          </h2>
          
          <p className="text-black leading-tight mb-6 text-sm">
            Mood disorders manifest in various forms, each with distinct characteristics. Here are some common types:
          </p>
          
          <div className="space-y-6">
            {/* Bipolar Disorder */}
            <div>
              <p className="text-black leading-tight text-sm">
                <span className="font-bold">Bipolar Disorder:</span> Bipolar disorder entails extreme mood swings, cycling between manic highs and depressive lows.
              </p>
              <p className="text-black leading-tight text-sm mt-3">
                <span className="font-semibold">Subcategories include:</span>
              </p>
              <ul className="mt-3 text-black leading-tight text-sm ml-4 space-y-1">
                <li>• Bipolar I disorder</li>
                <li>• Bipolar II disorder</li>
                <li>• Cyclothymia disorder</li>
                <li>• Unspecified bipolar</li>
              </ul>
            </div>

            {/* Depression */}
            <div>
              <p className="text-black leading-tight text-sm">
                <span className="font-bold">Depression:</span> Depression is marked by prolonged feelings of intense sadness and despair.
              </p>
              <p className="text-black leading-tight text-sm mt-3">
                <span className="font-semibold">Symptoms include:</span>
              </p>
              <ul className="mt-3 text-black leading-tight text-sm ml-4 space-y-1">
                <li>• Sadness</li>
                <li>• Guilt</li>
                <li>• Low self-worth</li>
                <li>• Self-hate</li>
                <li>• <span className="text-blue-600 underline">Suicidal thoughts</span></li>
                <li>• Shame</li>
                <li>• Loss of pleasure in activities</li>
                <li>• Changes in sleep and diet</li>
                <li>• Low energy levels</li>
              </ul>
              <p className="text-black leading-tight text-sm mt-3">
                <span className="font-semibold">Subtypes of depression include:</span>
              </p>
              <ul className="mt-3 text-black leading-tight text-sm ml-4 space-y-1">
                <li>• Depression with psychosis</li>
                <li>• <span className="text-blue-600 underline">Postpartum depression</span></li>
                <li>• Persistent depressive disorder</li>
                <li>• Seasonal affective disorder</li>
                <li>• Situational depression or situational mood disorder</li>
              </ul>
            </div>

            {/* Disruptive Mood Dysregulation Disorder and Premenstrual Dysphoric Disorder (PMDD) */}
            <div>
              <p className="text-black leading-tight text-sm">
                <span className="font-bold">Disruptive Mood Dysregulation Disorder:</span> Primarily affecting children and teenagers, this disorder causes depressive and irritable moods without apparent triggers. Salient features include anger and explosive mood outbursts. Premenstrual Dysphoric Disorder (PMDD): PMDD predominantly affects women and is linked to hormonal changes during the menstrual cycle. It leads to intense premenstrual symptoms surpassing typical PMS, including mood swings, <span className="text-blue-600 underline">depression</span>, anger, insomnia, and irritability.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Other Mood-Related Disorders */}
        <div className="mt-12">
          <div className="space-y-6">
            {/* Schizoaffective Disorder */}
            <div>
              <p className="text-black leading-tight text-sm">
                <span className="font-bold">Schizoaffective Disorder:</span> Combining symptoms of <span className="text-blue-600 underline">schizophrenia</span> with those of a mood disorder, this unique condition may entail <span className="text-blue-600 underline">behavioral issues</span>, delusions, <span className="text-blue-600 underline">depression</span>, difficulties with social functioning, hallucinations, and manic moods. Types include:
              </p>
              <ul className="mt-3 text-black leading-tight text-sm ml-4 space-y-1">
                <li>• Depressive Type</li>
                <li>• Manic Type</li>
                <li>• Mixed Type</li>
              </ul>
            </div>

            {/* Substance-Induced Mood Disorder */}
            <div>
              <p className="text-black leading-tight text-sm">
                Substance-Induced Mood Disorder: Resulting from factors like medication use or substance abuse, this disorder leads to prolonged periods of depressive symptoms. Individuals might turn to substances in an attempt to alleviate their mood issues.
              </p>
            </div>

            {/* Mixed Mood Swings Disorder */}
            <div>
              <p className="text-black leading-tight text-sm">
                Mixed Mood Swings Disorder: Experiencing mixed features means feeling symptoms of both mania or hypomania and depression at the same time. This can create a sense of conflict between the mind and body, as the highs and lows coexist in a complex mental health condition.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: How to Overcome Mood Disorder? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            How to Overcome Mood Disorder?
          </h2>
          
          <p className="text-black leading-tight mb-6 text-sm">
            Facing a mood disorder like depression or anxiety can feel overwhelming, but remember, recovery is possible. Here are powerful strategies to guide you on your journey to well-being:
          </p>
          
          <ul className="space-y-4 text-black leading-tight text-sm">
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <div>
                <span className="font-semibold">Seek professional help:</span> Consulting a <span className="text-blue-600 underline">mental health professional</span> is crucial. Therapists can provide diagnosis, treatment plans, and ongoing support, tailored to specific needs.
              </div>
            </li>

            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <div>
                <span className="font-semibold">Engage in therapy:</span> Different therapy methods, like cognitive behavioral therapy (CBT), can help you spot and change negative thinking patterns and boost your coping skills.
              </div>
            </li>

            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <div>
                <span className="font-semibold">Medication:</span> In some cases, medication prescribed by a psychiatrist can help regulate brain chemistry and stabilize mood. It notes that medication is often most effective when combined with therapy.
              </div>
            </li>

            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <div>
                <span className="font-semibold">Lifestyle changes:</span> Prioritizing healthy sleep, regular exercise, and a balanced diet can significantly impact mood and overall well-being.
              </div>
            </li>

            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <div>
                <span className="font-semibold">Mindfulness and relaxation techniques:</span> Practices like meditation, deep breathing, and yoga can help manage stress, promote relaxation, and cultivate inner peace.
              </div>
            </li>

            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <div>
                <span className="font-semibold">Connect with others:</span> Building a strong support network of friends, family, or therapy groups can provide invaluable emotional support and understanding.
              </div>
            </li>

            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <div>
                <span className="font-semibold">Engage in activities you enjoy:</span> Make time for hobbies and activities that bring joy and a sense of accomplishment.
              </div>
            </li>

            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <div>
                <span className="font-semibold">Be patient and kind to yourself:</span> Recovery takes time and effort. Celebrate small victories, forgive setbacks, and practice self-compassion throughout your journey.
              </div>
            </li>
          </ul>
          
          <p className="text-black leading-tight mt-6 text-sm">
            Remember, you're not alone in this. Millions of people successfully handle mood disorders, and with the right help and strategies, you can too.
          </p>
        </div>

        {/* Section 7: Who Can Help? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            Who Can Help?
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-sm">
            <p>
              If you're feeling down and sad a lot, it's important to speak with a good <span className="text-blue-600 font-semibold">psychologist</span>. Koott makes sure you get the best help since getting help from a professional is essential when your feelings don't get better on their own. They can help you manage mood disorders and simplify your treatment.
            </p>
            
            <p>
              Through lifestyle modifications and mood disorders counseling, clients can work towards fostering a more positive, content, and productive outlook. Establishing a supportive therapeutic relationship with a qualified <span className="text-blue-600 font-semibold">psychologist</span> is a crucial step in the journey toward mood disorder and achieving mental well-being.
            </p>
          </div>
          
          {/* Reviewed by Section */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm border border-gray-200 mt-6">
            <div>
              <p className="font-semibold text-black text-sm mb-1">Reviewed by:</p>
              <p className="text-black text-sm">Shuhaima Hanna Katti, Health Psychologist</p>
            </div>
            <button className="bg-white hover:bg-gray-50 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-gray-300">
              Send a message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodDisorderOverview;
