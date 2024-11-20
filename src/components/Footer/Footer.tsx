import React from "react";
import ContactForm from "../ContactForm/ContactForm";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Welcome to our website! We are dedicated to providing the best services and resources for our users.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h4>Contact Us</h4>
          <ContactForm/>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PenEd. All rights reserved.</p>
      </div>
      <style jsx>{`
        .footer {
          background-color: #282c34;
          color: #ffffff;
          padding: 2rem;
        }
        .footer-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 2rem;
        }
        .footer-section {
          flex: 1;
          min-width: 250px;
        }
        h4 {
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        p {
          margin: 0.5rem 0;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        ul li {
          margin: 0.5rem 0;
        }
        ul li a {
          color: #61dafb;
          text-decoration: none;
        }
        ul li a:hover {
          text-decoration: underline;
        }
        .contact-form {
          max-width: 400px;
        }
        .footer-bottom {
          margin-top: 2rem;
          text-align: center;
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
