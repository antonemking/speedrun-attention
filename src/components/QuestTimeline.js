// src/components/QuestTimeline.js

//import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import EmailCapture from './EmailCapture'; // Ensure you have this component for capturing emails


function QuestTimeline() {
  //const [showEmailCapture, setShowEmailCapture] = useState(false);

  const quests = [
    {
      id: 1,
      title: 'Challenge 0: Understanding Attention',
      description: 'Dive into the basics of attention mechanisms and how they revolutionize neural networks.',
      date: 'Available Now',
      link: 'challenge-0',
      available: true
    },
    {
      id: 2,
      title: 'Challenge 1: Multi-Head Attention',
      description: 'Explore how multi-head attention enhances the model’s ability to focus on multiple aspects of the input.',
      date: 'Coming Soon',
      link: '#',
      available: false
    },
    {
      id: 3,
      title: 'Challenge 2: Positional Encoding',
      description: 'Learn how the model understands sequence ordering using positional encodings.',
      date: 'Coming Soon',
      link: '#',
      available: false
    },
    {
      id: 4,
      title: 'Challenge 3: Encoder Block',
      description: 'Dive deeper into the encoder block structure.',
      date: 'Coming Soon',
      link: '#',
      available: false
    },
    {
      id: 5,
      title: 'Challenge 4: Decoder Block',
      description: 'Explore how the decoder block complements the encoder to generate outputs.',
      date: 'Coming Soon',
      link: '#',
      available: false
    },
    {
      id: 6,
      title: 'Challenge 5: Full Transformer',
      description: 'Assemble the full Transformer model by combining all the components.',
      date: 'Coming Soon',
      link: '#',
      available: false
    },
    {
      id: 7,
      title: 'Challenge 6: Training the Transformer',
      description: 'Train the Transformer and see how it learns from data.',
      date: 'Coming Soon',
      link: '#',
      available: false
    },
  ];

  const handleChallengeClick = (quest) => {
    // if (!quest.available) {
    //   setShowEmailCapture(true); // Show email capture modal when unavailable challenge is clicked
    // }
  };

  return (
    <section className="py-12 bg-gray-100" id="quests">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-teal-500"></div>
          {/* Quest Items */}
          {quests.map((quest, index) => (
            <div
              key={quest.id}
              id={quest.id === 1 ? 'first-quest' : ''}
              className={`mb-8 flex flex-col items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-1/2 px-4">
                <div
                  className={`bg-white rounded-lg shadow-lg p-6 transition-shadow duration-300 ${
                    quest.available ? 'hover:shadow-xl opacity-100' : 'opacity-50 cursor-not-allowed'
                  }`}
                  onClick={() => handleChallengeClick(quest)}
                  style={{ pointerEvents: quest.available ? 'auto' : 'none' }}
                >
                  <h3 className="text-2xl font-semibold mb-2 font-retro">
                    {quest.title}
                  </h3>
                  <p className="text-gray-700">{quest.description}</p>
                  {quest.available && (
                    <Link to={`/challenge/${quest.id}`}>
                      <button
                        className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition duration-300 font-retro"
                      >
                        ⚔️ Quest
                      </button>
                    </Link>
                  )}
                </div>
              </div>
              <div className="hidden md:flex justify-center items-center w-1/2">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  {quest.id}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuestTimeline;
