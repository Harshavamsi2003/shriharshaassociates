

// import { useEffect, useState } from "react";

// export default function Hero() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setShow(true), 200);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <section className="hero-final" id="home">

//       {/* BLURRED BACKGROUND IMAGE */}
//       <div className="hero-bg-image"></div>

//       {/* DARK + GOLD OVERLAY */}
//       <div className="hero-bg-overlay"></div>

//       {/* CONTENT */}
//       <div className={`hero-final-content ${show ? "active" : ""}`}>

//         <h1>
//           SHRI HARSHA <br />
//           <span>ASSOCIATES</span>
//         </h1>

//         <h2 className="hero-subtitle">
//           Trusted Construction & Infrastructure Solutions
//         </h2>

//         <p className="hero-description">
//           We deliver high-quality residential, commercial, and infrastructure
//           projects with uncompromised engineering standards, strict safety
//           practices, and reliable on-time execution.
//         </p>

//         <div className="hero-actions">
//           <a href="#projects" className="hero-btn primary">
//             View Projects
//           </a>
//           <a href="#contact" className="hero-btn secondary">
//             Get Consultation
//           </a>
//         </div>

//         <div className="hero-trust">
//           <span>Since 2013</span>
//           <span>Quality Assured</span>
//           <span>On-Time Delivery</span>
//           <span>Trusted Engineering</span>
//         </div>

//       </div>

//       {/* SCROLL INDICATOR */}
//       <div className="scroll-indicator">
//         <span></span>
//       </div>

//     </section>
//   );
// }

import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero-final" id="home">

      {/* BLURRED BACKGROUND IMAGE */}
      <div className="hero-bg-image"></div>

      {/* DARK + GOLD OVERLAY */}
      <div className="hero-bg-overlay"></div>

      {/* CONTENT */}
      <div className={`hero-final-content ${show ? "active" : ""}`}>

        <h1>
          SHRI HARSHA <br />
          <span>ASSOCIATES</span>
        </h1>

        <h2 className="hero-subtitle">
          Trusted Construction & Infrastructure Solutions
        </h2>

        <p className="hero-description">
          We deliver high-quality residential, commercial, and infrastructure
          projects with uncompromised engineering standards, strict safety
          practices, and reliable on-time execution.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-btn primary">
            View Projects
          </a>
          <a href="#contact" className="hero-btn secondary">
            Get Consultation
          </a>
        </div>

        <div className="hero-trust">
          <span>Since 2013</span>
          <span>Quality Assured</span>
          <span>On-Time Delivery</span>
          <span>Trusted Engineering</span>
        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>
  );
}
