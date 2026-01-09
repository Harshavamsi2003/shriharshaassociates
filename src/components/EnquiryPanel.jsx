// import { useState } from "react";

// export default function EnquiryPanel({ open, onClose }) {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     message: ""
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Enquiry sent successfully!");
//     onClose();
//   };

//   return (
//     <>
//       {/* OVERLAY */}
//       <div
//         className={`enquiry-overlay ${open ? "show" : ""}`}
//         onClick={onClose}
//       />

//       {/* PANEL */}
//       <div className={`enquiry-panel ${open ? "open" : ""}`}>
//         <span className="close-btn" onClick={onClose}>
//           &times;
//         </span>

//         <h3>Quick Enquiry</h3>
//         <p className="enquiry-subtitle">
//           Get a call back from our experts
//         </p>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Your Name"
//             required
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//           />

//           <input
//             type="tel"
//             placeholder="Phone Number"
//             required
//             onChange={(e) =>
//               setForm({ ...form, phone: e.target.value })
//             }
//           />

//           <textarea
//             placeholder="Your Requirement"
//             required
//             onChange={(e) =>
//               setForm({ ...form, message: e.target.value })
//             }
//           />

//           <button type="submit">Send Enquiry</button>
//         </form>
//       </div>
//     </>
//   );
// }

import { useState } from "react";

export default function EnquiryPanel({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enquiry sent successfully!");
    onClose();
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`enquiry-overlay ${open ? "show" : ""}`}
        onClick={onClose}
      />

      {/* PANEL */}
      <div className={`enquiry-panel ${open ? "open" : ""}`}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>

        <h3>Quick Enquiry</h3>
        <p className="enquiry-subtitle">
          Get a call back from our experts
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <textarea
            placeholder="Your Requirement"
            required
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button type="submit">Send Enquiry</button>
        </form>
      </div>
    </>
  );
}
