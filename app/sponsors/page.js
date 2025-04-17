"use client";

export default function Sponsors() {
  return (
    <div className="pt-24">
      <h1 className="text-3xl font-bold text-center mb-6">Our Sponsors</h1>
      <p className="text-center text-gray-600 mb-5">
        Big thanks to our sponsors who make this possible.
      </p>

      {/* Row 1: Two images */}
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "10px" }}>
        {["sponsor5.png", "sponsor2.jpg"].map((img, idx) => (
          <div
            key={idx}
            style={{
              width: "150px",
              height: "150px",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 0 20px 5px rgba(173, 216, 230, 0.8)",
            }}
          >
            <img
              src={`/${img}`}
              alt={`Sponsor ${idx + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* Row 2: One image (centered) */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        <div
          style={{
            width: "150px",
            height: "150px",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 0 20px 5px rgba(173, 216, 230, 0.8)",
          }}
        >
          <img
            src="/sponsor3.png"
            alt="Sponsor 3"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Row 3: Two images */}
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "10px" }}>
        {["sponsor4.png", "sponsor7.png"].map((img, idx) => (
          <div
            key={idx}
            style={{
              width: "150px",
              height: "150px",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 0 20px 5px rgba(173, 216, 230, 0.8)",
            }}
          >
            <img
              src={`/${img}`}
              alt={`Sponsor ${idx + 4}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* Row 4: One image (centered) */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        <div
          style={{
            width: "150px",
            height: "150px",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 0 20px 5px rgba(173, 216, 230, 0.8)",
          }}
        >
          <img
            src="/sponsor6.png"
            alt="Sponsor 6"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Row 5: Two images */}
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "10px" }}>
        {["sponsor1.jpg", "sponsor12.png"].map((img, idx) => (
          <div
            key={idx}
            style={{
              width: "150px",
              height: "150px",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 0 20px 5px rgba(173, 216, 230, 0.8)",
            }}
          >
            <img
              src={`/${img}`}
              alt={`Sponsor ${idx + 7}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* Row 6: One image (centered) */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        <div
          style={{
            width: "150px",
            height: "150px",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 0 20px 5px rgba(173, 216, 230, 0.8)",
          }}
        >
          <img
            src="/sponsor8.jpg"
            alt="Sponsor 9"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Row 7: Two images */}
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "10px" }}>
        {["sponsor9.jpg", "sponsor10.jpg"].map((img, idx) => (
          <div
            key={idx}
            style={{
              width: "150px",
              height: "150px",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 0 20px 5px rgba(173, 216, 230, 0.8)",
            }}
          >
            <img
              src={`/${img}`}
              alt={`Sponsor ${idx + 10}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* Row 8: One image (centered) */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        <div
          style={{
            width: "150px",
            height: "150px",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 0 20px 5px rgba(173, 216, 230, 0.8)",
          }}
        >
          <img
            src="/sponsor11.jpg"
            alt="Sponsor 12"
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
