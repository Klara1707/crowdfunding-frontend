
import React from 'react';
import './PersonalCards.css';

import pointyImage from '../components/pointy.jpg';
import spikyImage from '../components/spiky.jpg';
import turboImage from '../components/turbo.jpg';
import lemmonImage from '../components/lemmon.jpg';
import miniImage from '../components/jack.jpg';


const hermitCrabs = [
    { id: 1, name: 'Pointy', photo: pointyImage, description: 'Pointy is a thrill-seeking crab who thinks every grain of sand is a new adventure (and possibly a snack). He’s got sensory needs, so he’s always poking things—rocks, shells, sometimes his own reflection. If you hear a tiny “YEEHAW!” from the corner of the tank, it’s probably Spiky launching himself off a coral ledge.' },
    { id: 2, name: 'Spiky', photo: spikyImage, description: 'Spiky is the artsy one—he communicates through interpretive shell dances and once made a sand sculpture of a jellyfish that made everyone cry. He’s autistic and proud, and while he might need a little quiet time, his creativity is louder than a seagull at sunrise. He’s basically the Banksy of the tide pool.' },
    { id: 3, name: 'Turbo', photo: turboImage, description: 'Turbo is the crab equivalent of a triple-shot espresso—he’s fast, loud, and always halfway through five different projects. He once tried to build a zipline between two rocks using seaweed and sheer optimism. Sure, he forgets what he’s doing mid-scuttle, but he’s having the time of his life doing it.' },
    { id: 4, name: 'Lemmon', photo: lemmonImage, description: 'Lemmon is the spreadsheet of the sea—she’s got her shell collection alphabetized and color-coded. She loves a good routine and gets personally offended when someone moves her algae snacks out of order. Her catchphrase? “There’s a system for that.' },
    { id: 5, name: 'Mini', photo: miniImage, description: 'Mini is the emotional support crab of the group—she’ll hug you with her claws (gently) and then cry because she’s so proud of you. She feels everything deeply, including the heartbreak of a dropped snack. Her dream is to open a crab wellness spa with seaweed wraps and guided shell meditation.' },
    { id: 6, name: 'Tank Camera', description: ' Welcome to the Thank Camera: where the crabs are cute, the snacks are crunchy, and someone’s always dramatically rearranging their shell collection.' },
    ];


const PersonalCard = ({ crab }) => (
  <div className="personal-card">
    <div className="personal-card-image">
      <img src={crab.photo} alt={crab.name} />
    </div>
    <div className="personal-card-content">
      <h3>{crab.name}</h3>
      <p>{crab.description}</p>
      <button>Pledge to {crab.name}</button>
    </div>
  </div>
);


    const PersonalCards = () => (
    <div className="personal-cards-container">
        {hermitCrabs.map(crab => (
        <PersonalCard key={crab.id} crab={crab} />
        ))}
    </div>
);


export default PersonalCards;


