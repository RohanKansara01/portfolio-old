import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Box1, ContactWrapper, Outer } from "./ContactElements";
import { HiLocationMarker } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { FaMobileAlt,FaLinkedin,FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle" style={{textAlign:"center" , color:"gray"}}>Contact Me</div>
        <div className="BigCard">
          <Outer>
            <Box1>
              <FaMobileAlt />
              <p id="contact-phone">+91 6283528519</p>
            </Box1>
            <Box1 id="contact-email">
              <HiMail />
              {/* <p>rohankansara0110@gmail.com</p> */}
              <a
              href="mailto:rohankansara0110@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
             >
              rohankansara0110@gmail.com
             </a>
            </Box1>
            <Box1>
              <HiLocationMarker />
              <p>Valsad, Gujarat</p>
            </Box1>
            <Box1 id="linkdin">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/rohankansara/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rohan Kansara
              </a>
            </Box1>
            <Box1 id="github">
              <FaGithub />
              <a
                href="https://github.com/RohanKansara01"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rohan Kansara Github
              </a>
            </Box1>
          </Outer>
        </div>
        {/* <SocialIcon /> */}
      </div>
    </ContactWrapper>
  );
}

export default Contact;
