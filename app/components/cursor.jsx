"use client";

// /app/components/CircleCursor.js

import React, { useEffect, useState } from 'react';

const CircleCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClickable, setIsClickable] = useState(false); // État pour savoir si le curseur survole un élément cliquable

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event) => {
      // Vérifier si l'élément survolé est un élément cliquable (comme un lien ou un bouton)
      if (event.target.closest('a, button, [role="button"], [tabindex]')) {
        setIsClickable(true);
      }
    };

    const handleMouseOut = () => {
      setIsClickable(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y - 35,
        left: position.x - 35,
        width: '70px', // Taille par défaut de 70px
        height: '70px',
        borderRadius: '50%',
        backgroundColor: 'white',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
        animation: isClickable ? 'shrink-grow 2s infinite' : 'none', // Animation de rétrécissement et retour à la taille initiale
      }}
    >
      {/* Point central */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          backgroundColor: 'black',
          transform: 'translate(-50%, -50%)', // Le point reste au centre du cercle
          pointerEvents: 'none', // Assurez-vous que le point central ne capte pas les événements de souris
        }}
      ></div>
    </div>
  );
};

export default CircleCursor;
