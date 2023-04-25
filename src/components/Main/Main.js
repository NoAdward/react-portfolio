import MessegeIcon from "../icons/MessegeIcon";
import "./Main.scss";

import mainImage from "../../assets/user.png";

export default function Main() {
  return (
    <div className="container main">
      <div className="main__info">
        <div className="main__title">
          Hi, I am Your Name A Product Designer based in City.
        </div>
        <div className="main__desc">
          I help businesses and companies reach their goals by designing
          user-centric digital products & interactive experiences.
        </div>
        <a href="/" className="btn main__btn">
          <MessegeIcon />
          <span>hi@yourname.com</span>
        </a>
      </div>

      <div className="main__image">
        <img src={mainImage} alt="User" />
      </div>
    </div>
  );
}
