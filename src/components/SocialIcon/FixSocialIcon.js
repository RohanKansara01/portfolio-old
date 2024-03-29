import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import { FiMail } from 'react-icons/fi';

const Social = styled.div`
  display: block;
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2rem;
    color: rgb(119, 119, 121);
    transition: 0.2s ease-in;
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

  @media screen and (max-width: 820px) {
    display: none;
  }
`;
function FixSocialIcon() {
  return (
    <Social>
      <ul>
        <li className="item">
          <a
            id="contact-linkedin"
            href="https://www.linkedin.com/in/madhukarkr2468/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="item">
          <a
            id="contact-github"
            href="https://github.com/Madhukarkrgithub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="item">
        <a
          href="mailto:madhukarkumar2468@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
         >
        <FiMail />
      </a>
        </li>
      </ul>
    </Social>
  );
}

export default FixSocialIcon;
