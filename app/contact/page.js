"use client"; // Add this line to mark the component as Client Component

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90 px-4 py-10">
      <div className="w-full max-w-6xl bg-transparent border border-white/20 rounded-2xl p-10 shadow-2xl text-white flex flex-col lg:flex-row gap-10">
        
        {/* Left: Contact Info Wrapper with Transparent Black Background */}
        <div className="contact-info-container text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-cyan-400 tracking-wider">Contact Us!</h1>

          <p className="text-lg text-gray-200">📞 <span className="text-cyan-400">+91 98765 43210</span></p>
          <p className="text-lg text-gray-200">📧 <span className="text-cyan-400">contact@iei-events.com</span></p>
          <p className="text-lg text-gray-200">📍 <span className="text-cyan-400">Institute of Engineers India, XYZ Campus, City Name</span></p>

          <p className="text-lg text-gray-200 pt-4">
          📸 Follow us on Instagram:{" "}
          <a
            href="https://www.instagram.com/iei_tiet/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline"
          >
            @iei_official
          </a>
          </p>

        </div>

        {/* Right: Map */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4 text-center lg:text-left">Find Us Here</h2>
          <div className="w-full h-[300px] flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.386159990098!2d76.36021697550668!3d30.35644467475364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ab86533db5%3A0x93cc1f72eae1c9a8!2sThapar%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1713019389486!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-info-container {
          background-color: rgba(0, 0, 0, 0.6); /* Black transparent background */
          padding: 1.5rem;
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
