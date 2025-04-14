"use client";
import { useState, Suspense } from "react";

export default function Events() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const events = [
    {
      title: "Tech Fest",
      description: "Join us for an amazing day of innovation, code, and creativity!",
      details:
        "The Tech Fest includes coding competitions, AI workshops, robotics showcases, and keynote speeches from industry leaders.",
    },
    {
      title: "Esports Tournament",
      description: "Compete in the ultimate gaming showdown!",
      details:
        "Enjoy performances from various cultures including classical music, modern dance, and a grand fashion show.",
    },
  ];

  const games = [
    { name: "Valorant", img: "/valorant.jpeg" },
    { name: "Minecraft", img: "/minecraft.jpg" },
    { name: "BGMI", img: "/bgmi.jpg" },
    { name: "FIFA", img: "/fifa.jpeg" },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center p-4"
      style={{
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Top Banner */}
      <div
        className="card text-center bg-dark text-white mb-4"
        style={{
          width: "70rem",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundImage: "url('/pop.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="card-body">
          <h1 className="display-4 fw-bold">ORION</h1>
          <p className="lead">A celebration of innovation, culture, and creativity.</p>
        </div>
      </div>

      {/* Event Cards Container */}
      <div className="d-flex flex-column gap-4 align-items-center w-100">
        {events.map((event, index) => {
          const isEsports = event.title === "Esports Tournament";
          const isOrion = event.title === "ORION"; // Prevent glow effect on ORION card

          return (
            <div
              key={index}
              className="card text-white"
              style={{
                width: "70rem",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.4)",
                backgroundImage: isEsports ? "url('/esports.jpg')" : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: isOrion ? "none" : "drop-shadow(0 0 15px rgba(173, 216, 230, 1))", // Light blue glow for other cards
                minHeight: isOrion ? "600px" : "auto", // Use min-height for ORION card to prevent shifting
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // To maintain spacing inside the ORION card
              }}
            >
              <div className="card-body" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
                <button onClick={() => toggleExpand(index)} className="btn btn-light">
                  {expandedIndex === index ? "Show Less" : "Register"}
                </button>

                {expandedIndex === index && (
                  <div className="mt-4 border-top pt-4">
                    <p className="mb-4">{event.details}</p>

                    {isEsports && (
                      <div className="d-flex flex-column gap-5">
                        {games.map((game, idx) => (
                          <div
                            key={game.name}
                            className={`d-flex ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"} align-items-center gap-4`}
                          >
                            <div className="text-center w-100">
                              <Suspense fallback={<div>Loading...</div>}>
                                <img
                                  src={game.img}
                                  alt={game.name}
                                  loading="lazy" // Lazy load the images
                                  style={{
                                    width: "400px",
                                    height: "230px",
                                    objectFit: "cover",
                                    borderRadius: "12px",
                                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
                                  }}
                                />
                              </Suspense>
                              <h6 className="text-white mt-3 mb-2">{game.name}</h6>
                              <button className="btn btn-outline-light">Register</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
