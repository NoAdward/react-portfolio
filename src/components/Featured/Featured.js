import ArrowIcon from "../icons/ArrowIcon";
import "./Featured.scss";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import work4 from "../../assets/work4.png";

export default function Featured() {
  return (
    <div className="featured container">
      <div className="featured__title">
        <div className="featured__img">
          <ArrowIcon />
        </div>
        <div className="featured__desc">Featured Work</div>
      </div>

      <div className="featured__list">
        <div className="featured__item">
          <img src={work1} alt="" />
        </div>
        <div className="featured__item">
          <img src={work2} alt="" />
        </div>
        <div className="featured__item">
          <img src={work3} alt="" />
        </div>
        <div className="featured__item">
          <img src={work4} alt="" />
        </div>
      </div>
    </div>
  );
}
