import React, { useEffect, useState } from "react";

const CursorGlow = () => {
  const [cursor, setCursor] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const update = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(400px at ${cursor.x}px ${cursor.y}px, rgba(110,67,224,0.12), transparent 80%)`,
        transition: "background 0.05s ease",
      }}
    />
  );
};

export default CursorGlow;
