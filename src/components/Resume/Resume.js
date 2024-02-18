import Rohan_Resume from "./Rohan-Kansara-Resume.pdf";
import styled from "styled-components";
import { Button } from "./ResumeElements";
export const Resume1 = () => {
  const openResume = () => {
     window.open(
      "https://drive.google.com/file/d/1OtxDnlDZ_6pmqrIKpttXBHqK9_CrnEVZ/view?usp=sharing"
        );
  };
  return (
    <div>
      <a
       href={Rohan_Resume}
       download="Rohan-Kansara-Resume"
        className="nav-link resume"
        id="resume-button-1 resume-link-1"
      >
        <Button
          onClick={openResume}
          id="resume-link-1"
          className="btn btn-md
                    bg-accent hover:bg-accent-hover 
                    transition-all md:btn-lg nav-link resume"
        >
          Resume
        </Button>
      </a>
    </div>
  );
};

export const Resume2 = () => {
  const openResume = () => {
     window.open(
          "https://drive.google.com/file/d/1OtxDnlDZ_6pmqrIKpttXBHqK9_CrnEVZ/view?usp=sharing"
        );
  };

  return (
    <div>
      <a
       href={Rohan_Resume}
       download="Rohan-Kansara-Resume"
        className="nav-link resume"
        id="resume-button-2 resume-link-2"
      >
        <Button
          onClick={openResume}
          id="resume-link-2"
          className="btn btn-md
                    bg-accent hover:bg-accent-hover 
                    transition-all md:btn-lg nav-link resume"
        >
          Resume
        </Button>
      </a>
    </div>
  );
};