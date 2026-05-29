import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/dipanjan-khatua-4887282a4/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — dipanjankhatua
              </a>
            </p>
            <p>
              <a
                href="mailto:dipanjankhatua3@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Email — dipanjankhatua3@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+916006381851"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Phone — 6006381851
              </a>
            </p>
            <h4>Education</h4>
            <p>
              BCA, The Neotia University, Kolkata — 2023–2027 Till now
            </p>
            <p>
              12th Science, Iswarpur B.M. Academy — 2022–2023
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Dipanjan1232"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/dipanjan-khatua-4887282a4/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>            
          </div>
          <div className="contact-box">
            <h2>
              Development<br /> by <span>Dipanjan Khatua</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;