
import React, { useState } from 'react';
import './PersonalCards.css';
import CameraPop from '../components/CameraPop';
import CrabTakeOver from '../components/CrabTakeOver';

import pointyImage from '../components/pointy.jpg';
import spikyImage from '../components/spiky.jpg';
import turboImage from '../components/turbo.jpg';
import lemmonImage from '../components/lemmon.jpg';
import miniImage from '../components/jack.jpg';

const hermitCrabs = [

  {
    id: 1,
    name: 'Pointy',
    photo: pointyImage,
    description: 'Pointy sees every grain of sand as a thrilling puzzle, always chasing the next adventure. He dreams of a home where his boundless curiosity is embraced.',
  },
  {
    id: 2,
    name: 'Spiky',
    photo: spikyImage,
    description: 'Spiky speaks through expressive shell dances, sharing his world in movement and rhythm. He longs for a space where his creativity is truly understood.',
  },
  {
    id: 3,
    name: 'Turbo',
    photo: turboImage,
    description: 'Turbo moves at lightning speed, buzzing with ideas and energy. He hopes for a calm, accepting home where he can just be himself.',
  },
  {
    id: 4,
    name: 'Lemmon',
    photo: lemmonImage,
    description: 'Lemmon finds peace in patterns and plans, organizing his world with precision. He dreams of a place where structure brings comfort, not constraint.',
  },
  {
    id: 5,
    name: 'Mini',
    photo: miniImage,
    description: 'Mini feels deeply and listens with her whole heart, always there when someone needs her. She wishes for a gentle home where empathy is a superpower.',
  },
  {
    id: 6,
    name: 'Tank Camera',
    description: 'The Tank Camera watches over the crabs, capturing their quirks and quiet moments. It’s a window into their world—a place they hope will be safe, kind, and full of belonging.',
    goal: 100,
  }
];


const PersonalCard = ({ crab, onPledge }) => (
  <div className="personal-card">
    <div className="personal-card-image">
      {crab.photo && <img src={crab.photo} alt={crab.name} />}
    </div>
    <div className="personal-card-content">
      <h3>{crab.name}</h3>
      <p>{crab.description}</p>
      <button onClick={() => onPledge(crab)}>Pledge to {crab.name}</button>
    </div>
  </div>
);

const PersonalCards = () => {
  const [showCameraPop, setShowCameraPop] = useState(false);
  const [showCrabTakeOver, setShowCrabTakeOver] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handlePledge = (crab) => {
    if (crab.id === 6) {
      setSelectedCard(crab);
      setShowCameraPop(true);
    } else {
      alert(`Thanks for pledging to ${crab.name}!`);
    }
  };

  const handleCrabTakeOver = () => {
    setShowCameraPop(false);
    setShowCrabTakeOver(true);
  };

  return (
    <div className="personal-cards-container">
      {hermitCrabs.map((crab) => (
        <PersonalCard key={crab.id} crab={crab} onPledge={handlePledge} />
      ))}

      {showCameraPop && selectedCard && (
        <CameraPop
          card={selectedCard}
          onClose={() => setShowCameraPop(false)}
          onCrabTakeOver={handleCrabTakeOver}
        />
      )}

      {showCrabTakeOver && (
        <CrabTakeOver onClose={() => setShowCrabTakeOver(false)} />
      )}
    </div>
  );
};

export default PersonalCards;
