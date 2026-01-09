// import { useState } from "react";

// export default function Projects() {
//   const [activeProject, setActiveProject] = useState(null);

//   const projects = [
//     {
//       title: "Residential Apartments",
//       location: "Hyderabad",
//       description:
//         "Premium residential apartments built with modern design, quality materials, and efficient planning.",
//       image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
//     },
//     {
//       title: "Commercial Complex",
//       location: "Gachibowli",
//       description:
//         "State-of-the-art commercial complex designed for offices and retail spaces.",
//       image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
//     },
//   ];

//   return (
//     <section className="projects" id="projects">
//       <div className="projects-container">
//         <h2 className="section-title">Our Projects</h2>

//         <div className="projects-grid">
//           {projects.map((p, i) => (
//             <div
//               className="project-card"
//               key={i}
//               onClick={() => setActiveProject(p)}
//             >
//               <img src={p.image} />
//               <div className="project-overlay">
//                 <h3>{p.title}</h3>
//                 <p>{p.location}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* PROJECT DETAIL MODAL */}
//         {activeProject && (
//           <div className="project-modal">
//             <div className="project-modal-content">
//               <span onClick={() => setActiveProject(null)}>×</span>
//               <h3>{activeProject.title}</h3>
//               <p><strong>Location:</strong> {activeProject.location}</p>
//               <p>{activeProject.description}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import { useState } from "react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Residential Apartments",
      location: "Hyderabad",
      description:
        "Premium residential apartments built with modern design, quality materials, and efficient planning.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    },
    {
      title: "Commercial Complex",
      location: "Gachibowli",
      description:
        "State-of-the-art commercial complex designed for offices and retail spaces.",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Our Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              className="project-card"
              key={i}
              onClick={() => setActiveProject(p)}
            >
              <img src={p.image} alt={p.title} />
              <div className="project-overlay">
                <h3>{p.title}</h3>
                <p>{p.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PROJECT DETAIL MODAL */}
        {activeProject && (
          <div className="project-modal">
            <div className="project-modal-content">
              <span onClick={() => setActiveProject(null)}>×</span>
              <h3>{activeProject.title}</h3>
              <p><strong>Location:</strong> {activeProject.location}</p>
              <p>{activeProject.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
