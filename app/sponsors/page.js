"use client";

export default function Sponsors() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Our Sponsors</h1>
      <p className="text-center text-gray-600 mb-10">
        Big thanks to our sponsors who make this possible.
      </p>

      {/* Centered Image Container for the top image */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            width: "150px", // Reduced size
            height: "150px", // Reduced size
            overflow: "hidden",
            borderRadius: "12px", // Rounded borders
            boxShadow: "0 0 20px 5px rgba(173, 216, 230, 0.8)", // Light blue glow effect
          }}
        >
          <img
            src="/sponsor1.jpg" // Sponsor 1 image
            alt="Sponsor 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Bottom Images arranged in a triangle with reduced distance */}
      <div style={{ display: "flex", justifyContent:"space-around", marginTop: "10px" }}>
        <div
          style={{
            width: "150px", // Reduced size
            height: "150px", // Reduced size
            overflow: "hidden",
            borderRadius: "12px", // Rounded borders
            boxShadow: "0 0 20px 5px rgba(173, 216, 230, 0.8)", // Light blue glow effect
          }}
        >
          <img
            src="/sponsor2.jpg" // Sponsor 2 image
            alt="Sponsor 2"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div
          style={{
            width: "150px", // Reduced size
            height: "150px", // Reduced size
            overflow: "hidden",
            borderRadius: "12px", // Rounded borders
            boxShadow: "0 0 20px 5px rgba(173, 216, 230, 0.8)", // Light blue glow effect
          }}
        >
          <img
            src="/sponsor3.jpg" // Sponsor 3 image
            alt="Sponsor 3"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}
