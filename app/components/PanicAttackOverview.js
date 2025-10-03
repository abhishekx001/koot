import React from "react";

const PanicAttackOverview = () => {
  return (
    <div
      className="flex justify-center items-center py-16 px-4 bg-white"
      style={{
        fontFamily: 'var(--font-quicksand), sans-serif',
      }}
    >
      <div className="w-full max-w-4xl">
        {/* Section 1: What are Panic Attacks? */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            What is Panic Attacks?
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-sm">
            <p>
              A panic attack happens when your body feels threatened, even if there's no clear danger. It's often triggered by <span className="text-blue-600 font-semibold">anxiety</span> and causes a mix of physical and mental symptoms, making people feel like they're in serious danger or about to die.
            </p>
          </div>
        </div>

        {/* Section 2: What are the Symptoms of a Panic Attack? */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            What are the Symptoms of a Panic Attack?
          </h2>
          
          <p className="text-black leading-relaxed mb-6 text-sm">
            Panic attacks typically come on suddenly and can catch people off guard. Common symptoms include:
          </p>
          
          <ul className="space-y-2 text-black leading-tight text-sm">
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Chest pains</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Chills</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Abdominal cramps</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Disorientation and dizziness</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Difficulty breathing, feeling suffocated or choked</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Dry mouth</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Fear of losing control or dying</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Feeling detached from reality</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Hot flashes</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Nausea</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Numbness and tingling in extremities</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Palpitations or racing heart</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Shaky limbs</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Sweating</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Trembling</span>
            </li>
            
            <li className="flex items-start">
              <span className="text-gray-400 mr-3 mt-1">•</span>
              <span>Urgent need to use the toilet</span>
            </li>
          </ul>
        </div>

        {/* Section 3: How Common are Panic Attacks? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            How Common are Panic Attacks?
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-sm">
            <p>
              It's common for people to experience a panic attack once or twice in their life. Some individuals may develop panic disorder, characterized by excessive fear of attacks or altered behavior to avoid them. Research from Elsevier indicates that <span className="text-blue-600 font-semibold">10% of individuals in the UAE are affected by anxiety disorders, including panic attacks</span>, and panic disorders pose a significant and serious risk.
            </p>
          </div>
        </div>

        {/* Section 4: What is Panic Disorder? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            What is Panic Disorder?
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-sm">
            <p>
              Experiencing a panic attack doesn't always mean one has a panic disorder. Here are the signs of panic disorder:
            </p>
            
            <ul className="space-y-2 text-black leading-tight text-sm">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <span>Experiencing panic attacks unrelated to mental health issues or substance abuse.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <span>Regular occurrence of panic attacks.</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <span>Fear of having another panic attack.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 5: Why do Panic Attacks Occur? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            Why do Panic Attacks Occur?
          </h2>
          
          <div className="space-y-4 prefix-black leading-relaxed text-sm">
            <p>
              The precise causes remain unknown. Here are several risk factors that can increase the chances of experiencing symptoms:
            </p>
            
            <ul className="space-y-3 text-black leading-relaxed text-sm">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold">Age:</span> Teenagers and young adults are more likely to experience panic attacks.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold">Gender:</span> Women have a double chance of experiencing panic attacks compared to men.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold">Genetics:</span> Individuals with a family history of anxiety and panic disorders face an increased risk.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold">Mental Health Conditions:</span> Conditions such as PTSD, anxiety, and depression can elevate the chances of experiencing a panic attack.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold">Substance Abuse:</span> Those struggling with drug and alcohol addiction are also at a higher risk of panic attacks.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 6: What Do Panic Attacks Look Like in Kids? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            What Do Panic Attacks Look Like in Kids?
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-sm">
            <ul className="space-y-3 text-black leading-relaxed text-sm">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold">Rapid heartbeat</span>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold">Trembling</span>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold">Shortness of breath</span>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold">Sweating</span>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold">Dizziness</span>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold">Intense fear or worry</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 7: What Does a Panic Attack Feel Like? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            What Does a Panic Attack Feel Like?
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-sm">
            <p>
              For some individuals, especially those experiencing panic attacks for the first time, the sensation can feel akin to death. They feel intense fear as strange feelings spread through their body. Some even confuse the chest pain from panic attacks with a heart attack, afraid they might faint and lose control.
            </p>
          </div>
        </div>

        {/* Section 8: How Long Do Panic Attacks Typically Last? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            How Long Do Panic Attacks Typically Last?
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-sm">
            <p>
              The duration of a panic attack can vary, lasting anywhere from 5 minutes to an hour. Additionally, the intensity of symptoms can fluctuate. It's important to remember that not everyone has all the symptoms of a panic attack, but the strong feeling of being in danger is common.
            </p>
          </div>
        </div>

        {/* Section 9: How to Relax After a Panic Attack? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            How to Relax After a Panic Attack?
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-sm">
            <ul className="space-y-3 text-black leading-relaxed text-sm">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  Have a healthy meal.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  Take some time to rest.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  Try out some relaxation methods like deep breathing or meditation.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  Distance yourself from stressors.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  Engage in physical activity, like going for a walk.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  Reach out and talk to a trusted friend or family member for support and comfort.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 10: How to Prevent a Panic Attack? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            How to Prevent a Panic Attack?
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-sm">
            <p>
              To help stop panic attacks from happening, try these strategies:
            </p>
            
            <ul className="space-y-3 text-black leading-relaxed text-sm">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  Prioritize your mental well-being.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  Practice deep breathing exercises.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  Engage in regular physical exercise.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  Incorporate meditation into your routine.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  Learn and use relaxation exercises and techniques.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  Consider starting therapy to address underlying issues and develop coping mechanisms.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 11: How to Help Someone During a Panic Attack? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            How to Help Someone During a Panic Attack?
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-sm">
            <p>
              If you're with someone experiencing a panic attack, it's crucial to remain calm. Remember, they're not in immediate danger, and an overreaction might exacerbate the situation. Here's what you can do:
            </p>
          </div>
        </div>

        {/* Section 12: When Do Panic Attacks Typically Occur? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            When Do Panic Attacks Typically Occur?
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-sm">
            <p>
              Panic attacks can occur at any time and anywhere. While some attacks are triggered by specific situations (cued panic attacks), others happen unexpectedly (uncued panic attacks). Understanding when and where they occur helps in management.
            </p>
            
            <p>
              Panic attacks often happen during times of high stress, after major life changes, or in situations that remind you of past trauma. They can occur during sleep, while driving, in crowded places, or even in familiar environments at home.
            </p>
            
            <p>
              The unpredictability of panic attacks can lead to anticipatory anxiety - worrying about having another attack. This fear can cause avoidance behaviors, where you start avoiding places or situations where attacks previously occurred.
            </p>
          </div>
        </div>

        {/* Section 4: What Causes Panic Attacks? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            What Causes Panic Attacks?
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-sm">
            <p>
              While the exact cause isn't fully understood, panic attacks likely result from a combination of genetic, biological, psychological, and environmental factors. Understanding these causes can help in developing effective treatment strategies.
            </p>
            
            <h3 className="text-lg font-semibold text-black mb-3">Common Risk Factors:</h3>
            <ul className="space-y-2 text-black leading-relaxed text-sm ml-4">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <span><span className="font-semibold">Genetic Influences:</span> Family history of anxiety disorders or panic attacks increases risk.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <span><span className="font-semibold">Major Life Transitions:</span> Significant changes like job loss, divorce, or relocation.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <span><span className="font-semibold">Stress and Trauma:</span> Past traumatic experiences or ongoing high stress levels.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <span><span className="font-semibold">Physical Health:</span> Certain medical conditions or substance use can trigger panic attacks.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 5: How Can Panic Attacks Be Treated? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            How Can Panic Attacks Be Treated?
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-sm">
            <p>
              Panic attacks are highly treatable with the right approach. Professional treatment can significantly reduce symptoms and help you regain control over your life. Most people see improvement within 3-6 months of consistent treatment.
            </p>
            
            <h3 className="text-lg font-semibold text-black mb-3">Effective Treatment Options:</h3>
            <ul className="space-y-3 text-black leading-relaxed text-sm mb-6">
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold">Cognitive Behavioral Therapy (CBT):</span> Helps identify and change negative thought patterns that trigger panic.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold">Exposure Therapy:</span> Gradually exposes you to feared situations to reduce anxiety responses.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold">Relaxation Techniques:</span> Breathing exercises, meditation, and progressive muscle relaxation help manage symptoms.
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-gray-400 mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold">Medication:</span> When appropriate, medications can help manage severe symptoms while therapy takes effect.
                </div>
              </li>
            </ul>
            
            <p>
              At Koott, our <span className="text-blue-600 font-semibold">Malayali psychologists</span> specialize in treating panic attacks using evidence-based approaches tailored to your cultural background and specific needs.
            </p>
          </div>
        </div>

        {/* Section 6: How Long Does It Take to Recover from Panic Attacks? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            How Long Does It Take to Recover from Panic Attacks?
          </h2>
          
          <div className="space-y-4 place-y-4 text-black leading-relaxed text-sm">
            <p>
              Recovery from panic attacks varies for each person, but most people see significant improvement within 6-12 weeks of starting treatment. Complete recovery typically occurs within 3-6 months with consistent therapy.
            </p>
            
            <p>
              Factors affecting recovery time include severity of symptoms, presence of other mental health conditions, level of support from family and friends, and commitment to treatment. Early intervention generally leads to faster recovery.
            </p>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-black font-medium">
                Remember: Recovery from panic attacks is achievable. With proper therapy and support, you can learn to manage symptoms effectively and live a fulfilling life without fear of future attacks.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7: Who Can Help with Panic Attack Treatment? */}
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-6">
            Who Can Help with Panic Attack Treatment?
          </h2>
          
          <div className="space-y-4 text-black leading-relaxed text-sm mb-8">
            <p>
              If you're struggling with panic attacks, you don't have to face it alone. Professional help from experienced <span className="text-blue-600 font-semibold">panic attack specialists</span> can make a significant difference in your recovery. At Koott, we provide specialized online counseling for panic attacks with Malayali psychologists who understand the unique challenges of managing panic disorders.
            </p>
            
            <p>
              Our compassionate approach focuses on helping you develop immediate coping strategies, challenge fearful thoughts, and gradually reclaim your life from panic. With evidence-based treatments like CBT and exposure therapy, you can overcome panic attacks and regain confidence in your daily activities.
            </p>
          </div>
          
          {/* Reviewed by Section */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm border border-gray-200 mt-8">
            <div>
              <p className="font-semibold text-black text-sm mb-1">Reviewed by:</p>
              <p className="text-black text-sm">Dr. Rajesh Kumar, Clinical Psychologist</p>
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

export default PanicAttackOverview;