import "./Visual.scss";

import visual1 from "../../assets/visual1.png";
import visual2 from "../../assets/visual2.png";
import visual3 from "../../assets/visual3.png";
import visual4 from "../../assets/visual4.png";
import visual5 from "../../assets/visual5.png";
import visual6 from "../../assets/visual6.png";

export default function Visual() {
  return (
    <div className="container visual">
      <div className="title">Visual Explorations</div>
      <div className="visual__list">
        <div className="visual__item">
          <img src={visual1} alt="" />
        </div>
        <div className="visual__item">
          <img src={visual2} alt="" />
        </div>
        <div className="visual__item">
          <img src={visual3} alt="" />
        </div>
        <div className="visual__item">
          <img src={visual4} alt="" />
        </div>
        <div className="visual__item">
          <img src={visual5} alt="" />
        </div>
        <div className="visual__item">
          <img src={visual6} alt="" />
        </div>
      </div>
    </div>
  );
}
