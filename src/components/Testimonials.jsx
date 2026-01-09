
// import { useEffect, useRef, useState } from "react";

// const testimonials = [
//   {
//     text:
//       "Shri Harsha Associates delivered our residential project with exceptional quality and professionalism. The structural strength and finishing exceeded our expectations.",
//     name: "Ramesh Kumar",
//     role: "Residential Client – Chennai",
//   },
//   {
//     text:
//       "Their project planning and execution were extremely systematic. Timely delivery and transparent communication made the entire process stress-free.",
//     name: "Anita Sharma",
//     role: "Commercial Property Owner",
//   },
//   {
//     text:
//       "A highly reliable construction firm with strong technical expertise. Safety standards and material quality were maintained throughout the project.",
//     name: "Vijay Prasad",
//     role: "Industrial Client",
//   },
// ];

// export default function Testimonials() {
//   const [index, setIndex] = useState(0);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       setIndex((i) => (i + 1) % testimonials.length);
//     }, 6000);

//     return () => clearInterval(timerRef.current);
//   }, []);

//   const prev = () => {
//     setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
//   };

//   const next = () => {
//     setIndex((i) => (i + 1) % testimonials.length);
//   };

//   return (
//     <section className="testimonials testimonials-pro" id="testimonials">
//       <div className="testimonials-container">

//         <h2 className="section-title">What Our Clients Say</h2>
//         <p className="section-subtitle">
//           Trusted by homeowners, businesses, and industry professionals
//         </p>

//         <div className="testimonial-wrapper">

//           {/* LEFT ARROW */}
//           <button className="testimonial-arrow left" onClick={prev}>
//             ‹
//           </button>

//           {/* CARD */}
//           <div className="testimonial-pro-card">
//             <div className="quote-mark">“</div>

//             <p className="testimonial-text">
//               {testimonials[index].text}
//             </p>

//             <div className="testimonial-author">
//               <h4>{testimonials[index].name}</h4>
//               <span>{testimonials[index].role}</span>
//             </div>
//           </div>

//           {/* RIGHT ARROW */}
//           <button className="testimonial-arrow right" onClick={next}>
//             ›
//           </button>

//         </div>

//         {/* PROGRESS */}
//         <div className="testimonial-progress">
//           {testimonials.map((_, i) => (
//             <span
//               key={i}
//               className={i === index ? "active" : ""}
//               onClick={() => setIndex(i)}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    text:
      "Shri Harsha Associates delivered our residential project with exceptional quality and professionalism. The structural strength and finishing exceeded our expectations.",
    name: "Ramesh Kumar",
    role: "Residential Client – Chennai",
  },
  {
    text:
      "Their project planning and execution were extremely systematic. Timely delivery and transparent communication made the entire process stress-free.",
    name: "Anita Sharma",
    role: "Commercial Property Owner",
  },
  {
    text:
      "A highly reliable construction firm with strong technical expertise. Safety standards and material quality were maintained throughout the project.",
    name: "Vijay Prasad",
    role: "Industrial Client",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timerRef.current);
  }, []);

  const prev = () => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % testimonials.length);
  };

  return (
    <section className="testimonials testimonials-pro" id="testimonials">
      <div className="testimonials-container">

        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Trusted by homeowners, businesses, and industry professionals
        </p>

        <div className="testimonial-wrapper">

          {/* LEFT ARROW */}
          <button className="testimonial-arrow left" onClick={prev}>
            ‹
          </button>

          {/* CARD */}
          <div className="testimonial-pro-card">
            <div className="quote-mark">“</div>

            <p className="testimonial-text">
              {testimonials[index].text}
            </p>

            <div className="testimonial-author">
              <h4>{testimonials[index].name}</h4>
              <span>{testimonials[index].role}</span>
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button className="testimonial-arrow right" onClick={next}>
            ›
          </button>

        </div>

        {/* PROGRESS */}
        <div className="testimonial-progress">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
