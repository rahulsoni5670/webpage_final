"use client";
import { useState, Suspense } from "react";

export default function Events() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showRulebook, setShowRulebook] = useState({});

  const events = [
    {
      title: "Speaker Session (Coming soon...)",
      description: "Join us for an inspiring talk by industry leaders.",
      details: "TO BE REVEALED SOON !!!",
    },
    {
      title: "Gamers' Showdown",  // Changed the title here
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

  const toggleRulebook = (gameName) => {
    setShowRulebook((prev) => ({
      ...prev,
      [gameName]: !prev[gameName],
    }));
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
              fontSize: "9rem", // Increase this to make it even bigger
              textShadow: "0 0 10px rgba(255, 255, 255, 0.8)", // optional glow effect
            }}
          >
            ORION
          </h1>
          <p className="lead" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            A celebration of innovation, culture, and creativity.
          </p>
        </div>
      </div>

      {/* Event Cards Container */}
      <div className="d-flex flex-column gap-4 align-items-center w-100">
        {events.map((event, index) => {
          const isEsports = event.title === "Gamers' Showdown";  // Updated title check
          const isSpeaker = event.title.startsWith("Speaker Session");
          const backgroundImage = isEsports
            ? "url('/esports.jpg')"
            : isSpeaker
            ? "url('/speakerSession.png')"
            : "none";

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
                  borderRadius: "12px", // Adding rounded corners to the card body
                  boxShadow: "0 0 15px rgba(173, 216, 230, 0.5)", // Soft shadow for the card
                }}
              >
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="btn btn-light"
                >
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

                                <button
                                  className="btn btn-outline-info border border-white"
                                  onClick={() => toggleRulebook(game.name)}
                                >
                                  {showRulebook[game.name]
                                    ? "Hide Rulebook"
                                    : "Show Rulebook"}
                                </button>
                              </div>

                              {showRulebook[game.name] && (
                                <div className="mt-3 text-start px-3 text-white">
                                  <p>
                                    Here are the rules and guidelines for{" "}
                                    <strong>{game.name}</strong>. Make sure to
                                    follow the instructions carefully to ensure
                                    fair play and a smooth tournament.
                                  </p>

                                  {game.name === "BGMI" && (
                                    <div>
                                      <h5>BGMI Tournament Rules:</h5>
                                      <ul>
                                        <li>
                                          Players must use their own devices and
                                          ensure stable internet.
                                        </li>
                                        <li>
                                          Emulator players are not allowed.
                                        </li>
                                        <li>
                                          Teams will be grouped into custom rooms
                                          managed by the organizers.
                                        </li>
                                        <li>
                                          Map Pool: Erangel, Miramar, and Sanhok
                                          (subject to change)
                                        </li>
                                        <li>Game Mode: Squad - TPP</li>
                                        <li>
                                          Only one player can register per device.
                                        </li>
                                      </ul>
                                    </div>
                                  )}

                                  {game.name === "FIFA" && (
                                    <div>
                                      <h5>FIFA Tournament Rules:</h5>
                                      <ul>
                                        <li>
                                          Players must use their own devices and
                                          ensure stable internet.
                                        </li>
                                        <li>
                                          Game mode will be 1v1 in knockout rounds.
                                        </li>
                                        <li>
                                          All matches will be played in Ultimate
                                          Team mode.
                                        </li>
                                        <li>
                                          Only official FIFA versions are allowed.
                                        </li>
                                        <li>
                                          Players must follow fair play guidelines
                                          and respect others.
                                        </li>
                                      </ul>
                                    </div>
                                  )}

                                  {game.name === "Valorant" && (
                                    <div>
                                      <h5>Valorant Tournament Rules:</h5>
                                      <ul>
                                        <li>
                                          Players must use their own devices and
                                          ensure stable internet.
                                        </li>
                                        <li>
                                          Emulator players are not allowed.
                                        </li>
                                        <li>
                                          Teams will be grouped into custom rooms
                                          managed by the organizers.
                                        </li>
                                        <li>
                                          Map Pool: Bind, Haven, Ascent (subject to
                                          change)
                                        </li>
                                        <li>
                                          Game Mode: 5v5, Team Deathmatch, and
                                          Search & Destroy
                                        </li>
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              )}
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
