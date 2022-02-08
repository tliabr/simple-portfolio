import React, { useRef, useState, useContext } from "react";
import "./contact.css"
import { MdPhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "/home/thallia/code/simple-portfolio/src/components/context.js";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
        emailjs.sendForm('service_zjcyu8b', 'template_tjdq48k', formRef.current, 'user_9jYxriTNGk40827j7HhwV')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's talk</h1>
          <div className="c-info">
            <div className="c-info-item">
              <MdPhone className="c-icon" />
              +44 07512 216772
            </div>

            <div className="c-info-item">
              <MdLocationOn className="c-icon" />
              London, UK
            </div>

            <div className="c-info-item">
              <MdEmail className="c-icon" />
              thalliaborbarosa@gmail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
            natus?
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button className="contact-button">Submit</button>
            {done && "Thank you!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
