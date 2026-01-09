
// import founderImg from "../assets/founder.jpeg";
// import companyLogo from "../assets/company-logo.png";

// export default function About() {
//   return (
//     <section className="about" id="about">
//       <div className="about-container">

//         <h2 className="section-title">About Shri Harsha Associates</h2>
//         <p className="section-subtitle">
//           Building trust through engineering excellence
//         </p>

//         <div className="about-grid">

//           {/* COMPANY OVERVIEW */}
//           <div className="about-text company-box">
//             <h3>Company Overview</h3>

//             {/* COMPANY LOGO */}
//             <div className="company-profile">
//               <img src={companyLogo} alt="Shri Harsha Associates Logo" />
//             </div>

//             <p>
//               <strong>Shri Harsha Associates</strong> is a trusted and established
//               construction and infrastructure firm with over a decade of proven
//               industry experience. We specialize in delivering high-quality
//               residential, commercial, and industrial projects that meet modern
//               engineering standards and client expectations.
//             </p>

//             <p>
//               Our success is driven by a highly skilled workforce, a professional
//               project management team, and the use of quality-approved materials
//               combined with modern construction techniques. Every project we
//               undertake is executed with a strong focus on structural integrity,
//               safety, and long-term durability.
//             </p>

//             <p>
//               We strongly believe in transparent pricing, clear communication,
//               and timely delivery. By maintaining ethical business practices and
//               a client-centric approach, Shri Harsha Associates has earned a high
//               level of customer satisfaction and long-lasting relationships
//               built on trust and performance.
//             </p>
//           </div>

//           {/* FOUNDER SECTION */}
//           <div className="about-text founder-box">
//             <h3>Founder & Managing Director</h3>

//             <div className="founder-profile">
//               <img src={founderImg} alt="Suresh Kumar" />

//               <div className="founder-info">
//                 <h4>Suresh Kumar</h4>
//                 <span>Founder & Managing Director</span>
//               </div>
//             </div>

//             <p>
//               <strong>Suresh Kumar</strong> is a seasoned construction
//               professional with more than a decade of hands-on experience in
//               civil construction, infrastructure development, and project
//               execution. His deep technical knowledge and practical industry
//               exposure have played a key role in shaping the company’s growth
//               and reputation.
//             </p>

//             <p>
//               Under his leadership, Shri Harsha Associates has consistently
//               delivered projects that balance engineering precision with
//               functional design and cost efficiency. His vision is to create
//               durable, sustainable, and aesthetically strong structures while
//               maintaining uncompromised quality, safety standards, and customer
//               satisfaction across every project.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


import founderImg from "../assets/founder.jpeg";
import companyLogo from "../assets/company-logo.png";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <h2 className="section-title">About Shri Harsha Associates</h2>
        <p className="section-subtitle">
          Building trust through engineering excellence
        </p>

        <div className="about-grid">

          {/* COMPANY OVERVIEW */}
          <div className="about-text company-box">
            <h3>Company Overview</h3>

            {/* COMPANY LOGO */}
            <div className="company-profile">
              <img src={companyLogo} alt="Shri Harsha Associates Logo" />
            </div>

            <p>
              <strong>Shri Harsha Associates</strong> is a trusted and established
              construction and infrastructure firm with over a decade of proven
              industry experience. We specialize in delivering high-quality
              residential, commercial, and industrial projects that meet modern
              engineering standards and client expectations.
            </p>

            <p>
              Our success is driven by a highly skilled workforce, a professional
              project management team, and the use of quality-approved materials
              combined with modern construction techniques. Every project we
              undertake is executed with a strong focus on structural integrity,
              safety, and long-term durability.
            </p>

            <p>
              We strongly believe in transparent pricing, clear communication,
              and timely delivery. By maintaining ethical business practices and
              a client-centric approach, Shri Harsha Associates has earned a high
              level of customer satisfaction and long-lasting relationships
              built on trust and performance.
            </p>
          </div>

          {/* FOUNDER SECTION */}
          <div className="about-text founder-box">
            <h3>Founder & Managing Director</h3>

            <div className="founder-profile">
              <img src={founderImg} alt="Suresh Kumar" />

              <div className="founder-info">
                <h4>Suresh Kumar</h4>
                <span>Founder & Managing Director</span>
              </div>
            </div>

            <p>
              <strong>Suresh Kumar</strong> is a seasoned construction
              professional with more than a decade of hands-on experience in
              civil construction, infrastructure development, and project
              execution. His deep technical knowledge and practical industry
              exposure have played a key role in shaping the company’s growth
              and reputation.
            </p>

            <p>
              Under his leadership, Shri Harsha Associates has consistently
              delivered projects that balance engineering precision with
              functional design and cost efficiency. His vision is to create
              durable, sustainable, and aesthetically strong structures while
              maintaining uncompromised quality, safety standards, and customer
              satisfaction across every project.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
