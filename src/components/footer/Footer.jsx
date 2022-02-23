import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <a
          className="icon"
          href="https://github.com/tliabr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoMarkGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          href="https://www.linkedin.com/in/thallia-borba-rosa-salbego-b9aba4230/"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
