

// import { useState } from "react";
// import useScrollReveal from "../hooks/useScrollReveal";

// export default function Contact() {
//   const [ref, visible] = useScrollReveal(0.15);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     project: "",
//     message: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const validate = () => {
//     const e = {};
//     if (form.name.trim().length < 3) e.name = "Enter a valid name";
//     if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
//     if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter 10 digit phone number";
//     if (form.message.trim().length < 10) e.message = "Message too short";
//     return e;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const v = validate();
//     setErrors(v);

//     if (Object.keys(v).length === 0) {
//       setLoading(true);

//       // 🔔 Replace this with EmailJS / backend later
//       setTimeout(() => {
//         setLoading(false);
//         setSubmitted(true);
//       }, 1500);
//     }
//   };

//   return (
//     <section id="contact" className="contact-pro">
//       <div ref={ref} className={`contact-wrapper reveal ${visible ? "active" : ""}`}>

//         <h2 className="section-title">Contact Us</h2>
//         <p className="section-subtitle">
//           Let’s discuss your next construction or infrastructure project
//         </p>

//         <div className="contact-grid-pro">

//           {/* LEFT */}
//           <div className="contact-left">
//             <h3>Shri Harsha Associates</h3>
//             <p className="contact-tagline">
//               Trusted Construction Partner Since 2013
//             </p>

//             <p>No. 24, Main Road<br />Chennai, Tamil Nadu – 600040</p>
//             <p><strong>Phone:</strong> +91 98414 19288</p>
//             <p><strong>Email:</strong> info@shriharshaassociates.com</p>

//             <div className="contact-socials">
//               <a href="#"><i className="fa-solid fa-phone"></i></a>
//               <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
//               <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
//               <a href="#"><i className="fa-brands fa-instagram"></i></a>
//               <a href="mailto:info@shriharshaassociates.com">
//                 <i className="fa-solid fa-envelope"></i>
//               </a>
//             </div>

//             <p className="contact-service-area">
//               Serving Chennai & Surrounding Areas
//             </p>

//             <iframe
//               title="Shri Harsha Associates Location"
//               src="https://www.google.com/maps?q=Anna+Nagar+Chennai+600040&output=embed"
//               loading="lazy"
//             ></iframe>
//           </div>

//           {/* RIGHT */}
//           <div className="contact-right">
//             {submitted ? (
//               <div className="contact-success">
//                 <h3>Thank You!</h3>
//                 <p>
//                   Your enquiry has been received.<br />
//                   Our team will contact you shortly.
//                 </p>
//               </div>
//             ) : (
//               <>
//                 <h3>Send Us an Enquiry</h3>

//                 <form onSubmit={handleSubmit} noValidate>
//                   <label>Full Name</label>
//                   <input
//                     type="text"
//                     value={form.name}
//                     onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   />
//                   {errors.name && <span className="error">{errors.name}</span>}

//                   <label>Email Address</label>
//                   <input
//                     type="email"
//                     value={form.email}
//                     onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   />
//                   {errors.email && <span className="error">{errors.email}</span>}

//                   <label>Phone Number</label>
//                   <input
//                     type="tel"
//                     value={form.phone}
//                     onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   />
//                   {errors.phone && <span className="error">{errors.phone}</span>}

//                   <label>Project Type (Optional)</label>
//                   <select
//                     value={form.project}
//                     onChange={(e) => setForm({ ...form, project: e.target.value })}
//                   >
//                     <option value="">Select</option>
//                     <option>Residential</option>
//                     <option>Commercial</option>
//                     <option>Industrial</option>
//                     <option>Renovation</option>
//                   </select>

//                   <label>Your Message</label>
//                   <textarea
//                     value={form.message}
//                     onChange={(e) => setForm({ ...form, message: e.target.value })}
//                   />
//                   {errors.message && <span className="error">{errors.message}</span>}

//                   <button type="submit" disabled={loading}>
//                     {loading ? "Sending..." : "Send Enquiry"}
//                   </button>

//                   <p className="form-note">
//                     By submitting this form, you agree to be contacted by phone or email.
//                   </p>
//                 </form>
//               </>
//             )}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  const [ref, visible] = useScrollReveal(0.15);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 3) e.name = "Enter a valid name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter 10 digit phone number";
    if (form.message.trim().length < 10) e.message = "Message too short";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);

    if (Object.keys(v).length === 0) {
      setLoading(true);

      // 🔔 Replace this with EmailJS / backend later
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="contact-pro">
      <div
        ref={ref}
        className={`contact-wrapper reveal ${visible ? "active" : ""}`}
      >

        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Let’s discuss your next construction or infrastructure project
        </p>

        <div className="contact-grid-pro">

          {/* LEFT */}
          <div className="contact-left">
            <h3>Shri Harsha Associates</h3>
            <p className="contact-tagline">
              Trusted Construction Partner Since 2013
            </p>

            <p>
              No. 24, Main Road<br />
              Chennai, Tamil Nadu – 600040
            </p>

            <p><strong>Phone:</strong> +91 98414 19288</p>
            <p><strong>Email:</strong> info@shriharshaassociates.com</p>

            <div className="contact-socials">
              <a href="#"><i className="fa-solid fa-phone"></i></a>
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="mailto:info@shriharshaassociates.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>

            <p className="contact-service-area">
              Serving Chennai & Surrounding Areas
            </p>

            <iframe
              title="Shri Harsha Associates Location"
              src="https://www.google.com/maps?q=Anna+Nagar+Chennai+600040&output=embed"
              loading="lazy"
            ></iframe>
          </div>

          {/* RIGHT */}
          <div className="contact-right">
            {submitted ? (
              <div className="contact-success">
                <h3>Thank You!</h3>
                <p>
                  Your enquiry has been received.<br />
                  Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                <h3>Send Us an Enquiry</h3>

                <form onSubmit={handleSubmit} noValidate>
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                  {errors.name && <span className="error">{errors.name}</span>}

                  <label>Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  {errors.email && <span className="error">{errors.email}</span>}

                  <label>Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                  {errors.phone && <span className="error">{errors.phone}</span>}

                  <label>Project Type (Optional)</label>
                  <select
                    value={form.project}
                    onChange={(e) =>
                      setForm({ ...form, project: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                    <option>Renovation</option>
                  </select>

                  <label>Your Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                  {errors.message && (
                    <span className="error">{errors.message}</span>
                  )}

                  <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Enquiry"}
                  </button>

                  <p className="form-note">
                    By submitting this form, you agree to be contacted by phone
                    or email.
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
