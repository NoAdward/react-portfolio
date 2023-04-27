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
            <ViberIcon />
        </div>
        <div className="footer__item">
            <DribleIcon />
        </div>
        <div className="footer__item">
            <LinkIcon />
        </div>
        <div className="footer__item">
            <TwitterIcon />
        </div>
        <div className="footer__item">
            <BehanceIcon />
        </div>
      </div>
    </div>
  );
}