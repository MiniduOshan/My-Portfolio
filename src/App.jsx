import React, { useState } from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import Road from './components/Road';
import Background from './components/Background';

function App() {
  const [journeyStarted, setJourneyStarted] = useState(false);

  const handleStartJourney = () => {
    setJourneyStarted(true);
    document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <Background />
      <Hero onStartJourney={handleStartJourney} />
      
      <main id="main-content" className="relative z-10 w-full min-h-[100vh]">
        <div className="absolute top-0 left-0 w-full h-full">
          <Road journeyStarted={journeyStarted} />
        </div>
        
        {/* About Card: positioned at the end of the first branch */}
        <div className="absolute top-[25vh] left-[5%] transform -translate-y-1/2">
          <Section id="about" title="About Me">
            <p className="text-gray-700">
              Hello! I'm [Your Name], a passionate web developer with a keen eye for design and a love for creating engaging user experiences. My journey began with a simple curiosity, and now I specialize in building responsive and dynamic web applications.
            </p>
          </Section>
        </div>

        {/* Projects Card: positioned at the end of the second branch */}
        <div className="absolute top-[75vh] right-[5%] transform -translate-y-1/2">
          <Section id="projects" title="My Projects">
            <p className="text-gray-700">
              Here you'll find a selection of my recent work, showcasing the diverse paths my projects have taken. Each one represents a unique challenge and a step forward in my skills, from robust backend systems to intuitive front-end interfaces.
            </p>
          </Section>
        </div>

        {/* Contact Card: positioned at the end of the third branch */}
        <div className="absolute top-[100vh] left-[5%] transform -translate-y-1/2">
          <Section id="contact" title="Connect & Certify">
            <p className="text-gray-700">
              Feel free to get in touch! The road to a great career is always a two-way street. You can reach me at [Your Email Here] or connect on [LinkedIn/GitHub Link].
            </p>
          </Section>
        </div>
      </main>
    </div>
  );
}

export default App;