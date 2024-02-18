import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import profile from "../../Assets/rohan.jpg";
import { Resume2 } from "../Resume/Resume";

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  NavBtn,
  Image
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper id="home">
          <HeroLeft>
            <h1>Hi, I'm Rohan Kansara</h1>
            <h5>Full Stack Web Developer</h5>
            <p>
            I love making things look nice and writing code that's easy to understand. I'm really good at building Web apps that work well on all devices and web browsers. 
            </p>
            <br/><br/>
            <div id="resume-button-2">
        <NavBtn className="nav-link resume resume-link-2">
          <Resume2
            className="nav-link resume"
            id="resume-link-2"
          />
        </NavBtn>
      </div>
            {/* <NavBtn id="resume-button-2 resume-link-2" className="">
          <Resume2 id="resume-link-2 resume-button-2" />
        </NavBtn> */}
          </HeroLeft>
          {/* <NavBtn id="resume-button-2 resume-link-2" className="">
          <Resume2 id="resume-link-2 resume-button-2" />
        </NavBtn> */}
          <HeroRight>
            <Image className="home-img" src={profile} alt="man-svgrepo" />
          </HeroRight>
       
        {/* <NavBtn id="resume-button-2" className="">
          <Resume2 id="resume-link-2" />
        </NavBtn> */}
        </HeroWrapper>
        {/* <NavBtn id="resume-button-2 resume-link-2" className="">
          <Resume2 id="resume-link-2 resume-button-2" />
        </NavBtn> */}
      </HeroContainer>
    </main>
  );
}

export default Hero;

