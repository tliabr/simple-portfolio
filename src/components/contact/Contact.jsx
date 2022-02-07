import React from 'react';
import "./contact.css"
import { MdPhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Contact = () => {
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
          <form>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder='Message' name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
