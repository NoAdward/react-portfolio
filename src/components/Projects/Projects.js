import "./Projects.scss";

import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Projects() {
  return (
    <div className="container projects">
      <div className="title">Personal Projects</div>
      {/* <div className="projects-list">
        <div className="projects-list__item">
          
        </div>
        <div className="projects-list__item">
          
        </div>
        <div className="projects-list__item">
          
        </div>
      </div> */}
      <Carousel 
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      emulateTouch={true}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={33.33}
      >
        <div>
        <img src={project1} alt="" />
        </div>
        <div>
        <img src={project2} alt="" />
        </div>
        <div>
        <img src={project3} alt="" />
        </div>
        <div>
        <img src={project1} alt="" />
        </div>
        <div>
        <img src={project2} alt="" />
        </div>
        <div>
        <img src={project3} alt="" />
        </div>
      </Carousel>
    </div>
  );
}
