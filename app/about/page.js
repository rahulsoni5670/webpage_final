export default function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Text Column */}
        <div className="col-md-6">
          <div className="box p-4 rounded">
            <h1 className="display-5 fw-bold">About Us</h1>
            <p className="mt-3 fs-5">
              The Institution of Engineers (India) [IEI] is the largest multi-disciplinary
              professional body of engineers, established in 1920 with its Headquarters
              located in Kolkata and incorporated under Royal Charter on 9th September, 1935
              by the then His Majesty of King George V. The Royal Charter endowed the Institution
              with the responsibility to promote the general advancement of engineering amongst
              its members and persons attached to the Institution. After Independence, the Institution
              is a “Body Corporate” protected under Article 372 of the Constitution of India. The Institution
              of Engineers (India) is administered by a National Council with the President as its Head.
              The Institution has been serving the engineering fraternity for over a Century with its national
              and international presence through 124 Centres spread all over India, 6 Overseas Chapters,
              7 Fora and an Organ namely Engineering Staff College of India (ESCI), Hyderabad.
              The Institution encompasses 15 (fifteen) engineering disciplines with a Corporate
              membership of over 2 lakhs.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src="/about.jpg"
            alt="About us"
            className="img-fluid rounded shadow mb-3"
          />
          <img
            src="/about2.png"
            alt="About us extra"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}
