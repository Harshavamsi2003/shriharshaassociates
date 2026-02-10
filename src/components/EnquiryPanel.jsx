
// export default function EnquiryPanel({ open, onClose }) {
//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className={`enquiry-overlay ${open ? "show" : ""}`}
//         onClick={onClose}
//       />

//       {/* Panel */}
//       <div className={`enquiry-panel ${open ? "open" : ""}`}>
//         <span className="close-btn" onClick={onClose}>
//           ×
//         </span>

//         <h3>Quick Enquiry</h3>
//         <p className="enquiry-subtitle">
//           Get a call back from our experts
//         </p>

//         <form className="enquiry-form">
//           <input type="text" placeholder="Your Name" />
//           <input type="tel" placeholder="Phone Number" />
//           <textarea placeholder="Your Requirement" />

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const subject = encodeURIComponent(`Quick Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n\n` +
      `Requirement:\n${form.message}`
    );
    
    const mailtoLink = `mailto:harshavamsiprakash@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setForm({
        name: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
      setSubmitStatus("Thank you! Your enquiry has been sent.");
      
      // Close panel after 2 seconds
      setTimeout(() => {
        setSubmitStatus("");
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`enquiry-overlay ${open ? "show" : ""}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div className={`enquiry-panel ${open ? "open" : ""}`}>
        <span className="close-btn" onClick={onClose}>
          ×
        </span>

        <h3>Quick Enquiry</h3>
        <p className="enquiry-subtitle">
          Get a call back from our experts
        </p>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
          <textarea 
            placeholder="Your Requirement" 
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </button>

          {submitStatus && (
            <p style={{ 
              marginTop: '15px', 
              textAlign: 'center',
              fontSize: '14px',
              color: '#25D366'
            }}>
              {submitStatus}
            </p>
          )}
        </form>
      </div>
    </>
  );
}
