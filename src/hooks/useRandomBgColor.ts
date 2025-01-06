import { useState } from 'react';

const getRandomRGB = () => {
  const randomValue = () => Math.floor(Math.random() * 256);
  return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
};


const useRandomBgColor = () => {
  const [bgColor, setBgColor] = useState('rgb(255,255,255)'); // Initial background color

  const handlePress = () => {
    setBgColor(getRandomRGB());
  };

  return { handlePress, bgColor };
}

export default useRandomBgColor;
