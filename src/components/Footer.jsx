

import logo from "../assets/company-logo.png"; // adjust path if needed

export default function Footer() {
  return (
    <footer className="footer-simple">

      <div className="footer-inner">

        {/* LEFT – LOGO & COMPANY */}
        <div className="footer-brand">
          <img src={logo} alt="Shri Harsha Associates" />
          <div>
            <h4>Shri Harsha Associates</h4>
            <p>Construction & Infrastructure</p>
          </div>
        </div>

        {/* CENTER – QUICK LINKS */}
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* RIGHT – CONTACT */}
        <div className="footer-contact">
          <p>Chennai, Tamil Nadu</p>
          <p>+91 9XXXXXXXXX</p>
          <p>info@shriharshaassociates.com</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom-simple">
        © {new Date().getFullYear()} Shri Harsha Associates. All Rights Reserved.
      </div>

    </footer>
  );
}
