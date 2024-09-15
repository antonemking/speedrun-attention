// src/components/QuestTimeline.js

import React from 'react';
import { Link } from 'react-router-dom';

function QuestTimeline() {
  const quests = [
    {
      id: 1,
      title: 'Challenge 0: Understanding Attention',
      description:
        'Dive into the basics of attention mechanisms and how they revolutionize neural networks.',
      date: 'Available Now',
      link: 'challenge-0', // Replace '#' with the actual link to the challenge
    },
    // Add more challenges as needed
  ];

  return (
    <section className="py-12 bg-gray-100" id="quests">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-retro">
          Quests
        </h2> */}
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
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold mb-2 font-retro">
                    {quest.title}
                  </h3>
                  <p className="text-gray-700">{quest.description}</p>
                  <Link to={`/challenge/${quest.id}`}>
                    <button
                      className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 transition duration-300 font-retro"
                    >
                      ⚔️ Quest
                    </button>
                  </Link>
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
