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
        transition: 'transform 0.1s ease-out', 
        cursor: 'crosshair',
      }}
    ></div>
  );
};

export default CircleCursor;
