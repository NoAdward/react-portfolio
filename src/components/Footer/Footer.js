import "./Footer.scss";

// import visual1 from "../../assets/visual1.png";
import ViberIcon from '../../components/icons/socials/ViberIcon';
import DribleIcon from '../../components/icons/socials/DribleIcon';
import LinkIcon from '../../components/icons/socials/LinkIcon';
import TwitterIcon from '../../components/icons/socials/TwitterIcon';
import BehanceIcon from '../../components/icons/socials/BehanceIcon';

export default function Footer() {
  return (
    <div className="container footer">
      <div className="footer__title">
      Made by <span>Your Name</span> — Copyright 2021
      </div>
      <div className="footer__socials">
        <div className="footer__item">
            <img src={ViberIcon} alt="viber" />
        </div>
        <div className="footer__item">
            <img src={DribleIcon} alt="1" />
        </div>
        <div className="footer__item">
            <img src={LinkIcon} alt="2" />
        </div>
        <div className="footer__item">
            <img src={TwitterIcon} alt="3" />
        </div>
        <div className="footer__item">
            <img src={BehanceIcon} alt="4" />
        </div>
      </div>
    </div>
  );
}