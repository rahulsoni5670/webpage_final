"use client";
import { useState, Suspense } from "react";

export default function Events() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const events = [
    {
      title: "Speaker Session (Coming soon...)",
      description: "Join us for an inspiring talk by industry leaders.",
      details: "TO BE REVEALED SOON !!!",
    },
    {
      title: "Gamers' Showdown",
      description: "Compete in the ultimate gaming showdown!",
      details:
        "Enjoy performances from various cultures including classical music, modern dance, and a grand fashion show.",
    },
  ];

  const games = [
    { name: "Valorant", img: "/valorant.jpeg" },
    { name: "BGMI", img: "/bgmi.png" },
    { name: "FIFA", img: "/fifa.jpg" },
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
      <div
        className="card text-center text-white mb-4"
        style={{
          width: "70rem",
          height: "300px",
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
        }}
      >
        <div
          className="card-body"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <h1
            className="fw-bold"
            style={{
              fontSize: "9rem",
              textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            }}
          >
            ORION
          </h1>
          <p className="lead" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            A celebration of innovation, culture, and creativity.
          </p>
        </div>
      </div>

      <div className="d-flex flex-column gap-4 align-items-center w-100">
        {events.map((event, index) => {
          const isEsports = event.title === "Gamers' Showdown";
          const isSpeaker = event.title.startsWith("Speaker Session");
          const backgroundImage = isEsports
            ? "url('/esports.jpg')"
            : isSpeaker
            ? "url('/speakerSession.png')"
            : "none";

          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className="card text-white"
              style={{
                width: "70rem",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.4)",
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                className="card-body"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "12px",
                  boxShadow: "0 0 15px rgba(173, 216, 230, 0.5)",
                }}
              >
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="btn btn-light"
                >
                  {isExpanded ? "Show Less" : "Register"}
                </button>

                {!isExpanded && (
                  <span className="d-block mt-2 text-info fw-semibold">
                    <i className="bi bi-info-circle me-1"></i> Use your Thapar ID to register
                  </span>
                )}

                {isExpanded && (
                  <div className="mt-4 border-top pt-4">
                    <p className="mb-4">{event.details}</p>

                    {isEsports && (
                      <div className="d-flex flex-column gap-5">
                        {games.map((game, idx) => (
                          <div
                            key={game.name}
                            className={`d-flex ${
                              idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                            } align-items-center gap-4`}
                          >
                            <div className="text-center w-100">
                              <Suspense fallback={<div>Loading...</div>}>
                                <img
                                  src={game.img}
                                  alt={game.name}
                                  loading="lazy"
                                  style={{
                                    width: "400px",
                                    height: "230px",
                                    objectFit: "cover",
                                    borderRadius: "12px",
                                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
                                  }}
                                />
                              </Suspense>
                              <h6 className="text-white mt-3 mb-2">
                                {game.name}
                              </h6>
                              <div className="d-flex gap-3 justify-content-center mt-3">
                                {game.name === "BGMI" && (
                                  <a
                                    href="https://docs.google.com/forms/d/1rcZ6mfAYsFpGJ6IodInWIypaJBYMsBYLMXytNlHfkf8/edit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-light border border-white"
                                  >
                                    Register
                                  </a>
                                )}
                                {game.name === "FIFA" && (
                                  <a
                                    href="https://docs.google.com/forms/d/1OaMBt-B6we66fgo4lA3UqLvg4PJJWoIptS8pB4iGDM4/edit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-light border border-white"
                                  >
                                    Register
                                  </a>
                                )}
                                {game.name === "Valorant" && (
                                  <a
                                    href="https://docs.google.com/forms/d/13R2VK8wGS7CNa5SUGorMARnVw4QYGXWUy4pKQZ6m39w/edit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-light border border-white"
                                  >
                                    Register
                                  </a>
                                )}
                              </div>
                              <span className="d-block mt-2 text-info fw-semibold">
                                <i className="bi bi-info-circle me-1"></i> Use your Thapar ID to register
                              </span>
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
