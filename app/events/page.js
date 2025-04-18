"use client";
import { useState, Suspense } from "react";

export default function Events() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showSpeakerDetails, setShowSpeakerDetails] = useState(false);

  const events = [
    {
      title: "Speaker Session",
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
    { name: "Minecraft", img: "/minecraft.jpg" },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    if (events[index].title.startsWith("Speaker Session")) {
      setShowSpeakerDetails(false);
    }
  };

  const toggleSpeakerDetails = () => {
    setShowSpeakerDetails((prev) => !prev);
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center p-4"
      style={{ minHeight: "100vh", width: "100%" }}
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
              fontSize: "4.8rem",
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

                {isSpeaker && (
                  <div className="d-flex gap-3">
                    <button
                      onClick={toggleSpeakerDetails}
                      className="btn btn-outline-info"
                    >
                      {showSpeakerDetails ? "Hide" : "Know More"}
                    </button>
                    <a
                      href="https://docs.google.com/forms/d/1lzyJ73XiAvVNCccP5yr1wv-xr9miPiT9ZSDrEBHScCE/edit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-light"
                    >
                      Register
                    </a>
                  </div>
                )}

                {!isSpeaker && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="btn btn-light"
                  >
                    {isExpanded ? "Show Less" : "Register"}
                  </button>
                )}

                {!isExpanded && !isSpeaker && (
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
                                {game.name === "Minecraft" && (
                                  <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSeMYe2WBQvdma2jgwaRWEF0A3OaLLQhU8eKRdERWJFchHVniQ/viewform?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-light border border-white"
                                  >
                                    Register
                                  </a>
                                )}
                              </div>
                              <span className="d-block mt-2 fw-bold text-danger">
                                <i className="bi bi-exclamation-circle me-1"></i> Forms extended till 11 PM tonight!
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {isSpeaker && showSpeakerDetails && (
                  <div className="text-white mt-4 d-flex flex-column gap-5">
                    {/* Saumya Singh */}
                    <div className="d-flex flex-column flex-md-row align-items-center gap-4">
                      <img
                        src="/speaker1.jpg"
                        alt="Saumya Singh"
                        style={{
                          width: "250px",
                          borderRadius: "12px",
                          boxShadow: "0 0 10px rgba(255,255,255,0.2)",
                        }}
                      />
                      <div>
                        <h5>👩‍💼 Saumya Singh</h5>
                        <p className="mb-2">Industry leader & motivational speaker 💬</p>
                        <p>
                          Learn how to grow as a leader, build resilience, and stay future-ready.
                        </p>
                      </div>
                    </div>

                    {/* Manjyoti Parsar */}
                    <div className="d-flex flex-column flex-md-row-reverse align-items-center gap-4">
                      <img
                        src="/speaker2.jpg"
                        alt="Manjyoti Parsar"
                        style={{
                          width: "250px",
                          borderRadius: "12px",
                          boxShadow: "0 0 10px rgba(255,255,255,0.2)",
                        }}
                      />
                      <div>
                        <h5>👨‍💻 Manjyoti Parsar</h5>
                        <p className="mb-2">Tech innovator with a vision for the future 🌐</p>
                        <p>
                          Get insights into his journey, challenges, and the evolving tech world.
                        </p>
                      </div>
                    </div>

                    <div className="border-top pt-3">
                      <p className="mb-1">📅 <strong>Date:</strong> 21st April 2025</p>
                      <p className="mb-1">🕒 <strong>Time:</strong> 5:30 pm</p>
                      <p className="mb-1">📍 <strong>Venue:</strong> Main Auditorium (in front of jaggi)</p>
                      <p className="mb-2">🎁 <strong>Open to all students!</strong> Don’t miss this chance to learn, get motivated, and connect with inspiring professionals.</p>
                    </div>
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
