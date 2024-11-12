"use client"

// /app/components/CircleCursor.js

import React, { useEffect, useState } from 'react';

const CircleCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y - 35,
        left: position.x - 35,
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        backgroundColor: 'white',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
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
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
    </div>
  );
};

export default CircleCursor;
