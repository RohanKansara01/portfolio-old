import React from "react";
import {
  Image,
  ContactWrapper,
  Card
} from "./AboutElements";
function About() {
  return (
    <>
      {/* <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#151418ff"
          class="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg> */}

      <ContactWrapper id="about" className="about section">
        <div className="Container" >
          <div className="SectionTitle" style={{ marginTop: "100px", textAlign: "center", fontSize: "2.8em" , color:"grey" }}>
            About Me
          </div>
          <Card className="BigCard" style={{boxshadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;"}}>
            <Image
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_human_computer_interaction.jpg"
              alt="image"
            />
            <div className="AboutBio">
              {/* <ul> */}
            
              <li id="user-detail-name">
                Hello! My name is <strong>Rohan Kansara </strong>and I really enjoy making things like websites and digital art that can be seen and used on the internet.
              </li>
              <br />
              <li id="user-detail-intro">
              I'm good at using HTML5, CSS3, and JavaScript for building websites. I also know how to work with ReactJS. Additionally, I'm currently learning MongoDB, Express and NodeJs, which is a type of database.
              </li>
              <br />
              <li>
              During my journey, I've made lots of web apps and finished four big projects. This helped me get better at coding and taught me how to work well with others, lead a team, and communicate effectively. Now, after lots of practice, I'm excited to find a job as a full stack web developer.
              </li>
            </div>
          </Card>
        </div>
      </ContactWrapper>
    </>
  );
}

export default About;