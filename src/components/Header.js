import React from 'react';

function Header() {
    const handleScrollToQuest = () => {
        // Scroll to the first quest
        const questElement = document.getElementById('first-quest');
        if (questElement) {
          questElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      };
  return (
    <header
      className="relative h-[75vh] overflow-hidden bg-no-repeat bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/attention-banner.jpeg')",
        backgroundPosition: 'center bottom',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4">
        {/* Top Paragraph */}
        <p className="text-white text-lg md:text-xl mb-4">
          Master the groundbreaking paper that ignited the LLM revolution: <em>"Attention Is All You Need"</em>
        </p>

        {/* Title */}
        <h1 className="font-retro text-white text-4xl md:text-5xl font-bold mb-6">
          Speedrun Attention
        </h1>

        {/* Embark on this Quest Button */}
        <button
            onClick={handleScrollToQuest}
          className="bg-teal-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-teal-600 transition duration-300"
        >
          Embark on this Quest
        </button>
      </div>

      {/* Connect Wallet Button */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6">
        <button
          className="bg-transparent border border-white text-white px-6 py-2 rounded-full shadow-lg hover:bg-white hover:bg-opacity-20 transition duration-300"
        >
          Connect Wallet
        </button>
      </div>
    </header>
  );
}

export default Header;


