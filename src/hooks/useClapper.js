import { useState, useEffect } from 'react';

const useClapper = () => {
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [currentColor, setCurrentColor] = useState('red');

  useEffect(() => {
    const colors = ['red', 'green']; // List of colors to cycle through
    let currentIndex = 0;

    const intervalId = setInterval(() => {
         // Update the current color to the next color in the list
        setCurrentColor(colors[currentIndex]);
        currentIndex = (currentIndex + 1) % colors.length;
        //Timer Seconds
        setTotalSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once after initial render

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;


  return { seconds, minutes, hours , currentColor};
};

export default useClapper;
