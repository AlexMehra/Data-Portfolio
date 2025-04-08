"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <img
      src="/cursor.png"  // Make sure this image exists in /public
      alt="Custom Cursor"
      className="fixed w-8 h-8 pointer-events-none transition-transform transform -translate-x-1/2 -translate-y-1/2 z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
