import { useEffect, useState } from "react";

export default function LoadingDots() {
  const [dots, setDots] = useState([true, true, true]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        return [...prevDots];
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-start">
      <div className="px-4 py-4 rounded-lg bg-gray-100 flex items-center gap-1">
        {dots.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"
            style={{ animationDelay: `${index * 200}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
