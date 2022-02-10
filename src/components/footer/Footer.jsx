import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
          <GoMarkGithub className="icon" href="https://github.com/tliabr" />
          <AiFillLinkedin className="icon" href="https://www.linkedin.com/in/thallia-borba-rosa-salbego-b9aba4230/" />
      </div>
    </div>
  );
};

export default Footer;
