'use client';

import { useEffect, useState } from 'react';

export default function ProgressCircle() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(scrolled);
    };

    window.addEventListener('scroll', updateScroll);
    updateScroll();
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 w-[70px] h-[70px] z-9999 cursor-pointer transition-opacity duration-200 ${
        scrollPercent === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      onClick={handleClick}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full transform -rotate-90"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#2e2e2e"
          strokeWidth="6"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#FF7800"
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-100"
        />
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fontSize="24"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}
