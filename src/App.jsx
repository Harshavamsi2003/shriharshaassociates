// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Projects from "./components/Projects";
// import Stats from "./components/Stats";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <About />
//       <Stats />
//       <Services />
//       <Projects />
     
//       <Testimonials />
//       <Contact />
//       <Footer />

      

//       {/* GLOBAL WHATSAPP FLOAT */}
//       <a
//         href="https://wa.me/919841419288"
//         className="whatsapp-float"
//         target="_blank"
//         rel="noreferrer"
//         aria-label="WhatsApp Chat"
//       >
//         <i className="fa-brands fa-whatsapp"></i>
//       </a>
//     </>
//   );
// }

// import { useState } from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Projects from "./components/Projects";
// import Stats from "./components/Stats";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import FloatingSocials from "./components/FloatingSocials";
// import EnquiryPanel from "./components/EnquiryPanel";

// import "./styles/hero.css";
// import "./styles/header.css";
// import "./styles/about.css";
// import "./styles/stats.css";
// import "./styles/services.css";
// import "./styles/projects.css";
// import "./styles/testimonials.css";
// import "./styles/contact.css";
// import "./styles/footer.css";
// import "./styles/floating-ui.css";



// export default function App() {
//   const [enquiryOpen, setEnquiryOpen] = useState(false);

//   return (
//     <>
//       <Header />
//       <Hero />
//       <About />
//       <Stats />
//       <Services />
//       <Projects />
//       <Testimonials />
//       <Contact />
//       <Footer />

//       {/* FLOATING SOCIALS */}
//       <FloatingSocials />

//       {/* ENQUIRY TAB */}
//       <div
//         className="enquiry-tab"
//         onClick={() => setEnquiryOpen(true)}
//       >
//         ENQUIRY FORM
//       </div>

//       {/* ENQUIRY PANEL */}
//       <EnquiryPanel
//         open={enquiryOpen}
//         onClose={() => setEnquiryOpen(false)}
//       />

//       {/* WHATSAPP */}
//       <a
//         href="https://wa.me/919841419288"
//         className="whatsapp-float"
//         target="_blank"
//         rel="noreferrer"
//       >
//         <i className="fa-brands fa-whatsapp"></i>
//       </a>
//     </>
//   );
// }

import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import FloatingSocials from "./components/FloatingSocials";
import EnquiryPanel from "./components/EnquiryPanel";
import EnquiryTab from "./components/EnquiryTab";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Projects />

      <Testimonials />
      <Contact />
      <Footer />

      {/* FLOATING UI */}
      <FloatingSocials />
      <WhatsAppFloat />
      <EnquiryTab onOpen={() => setEnquiryOpen(true)} />

      <EnquiryPanel
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />
    </>
  );
}

export default App;
