"use client";

import { useState, useEffect } from "react";
import "./globals.css";

export default function Home() {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImages(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-container">
      <div className="typing-section">
        <h1 className="typing-text">
          Welcome to IEI<span className="cursor">!</span>
        </h1>
        <p className="sub-text">Explore events, meet sponsors, and more!</p>
      </div>

      {showImages && (
        <div className="image-container">
          <div
            className="background-image fade-in delay-1"
            style={{ backgroundImage: "url('/image1.png')" }}
          />
          <div
            className="background-image fade-in delay-2"
            style={{ backgroundImage: "url('/image2.png')" }}
          />
          <div
            className="background-image fade-in delay-3"
            style={{ backgroundImage: "url('/image3.png')" }}
          />
          <div
            className="background-image fade-in delay-3"
            style={{ backgroundImage: "url('/home2.jpeg')", height:"300px" }}
          />
        </div>
      )}
    </div>
  );
}
