import LogoIcon from "../icons/LogoIcon";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="container header__container">
        <a href="/" className="header__logo">
          <LogoIcon />
        </a>
        <div className="header__nav">
          <a href="/" className="header__a">Home</a>
          <a href="/" className="header__a">Work</a>
          <a href="/" className="header__a">Contact</a>
        </div>
      </div>
    </div>
  );
}
