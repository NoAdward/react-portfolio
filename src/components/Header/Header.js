import LogoIcon from "../icons/LogoIcon";
import "./Header.scss";


// document.querySelector('.burger').addEventListener('click', function() {
//   this.classList.toggle('active');
//   document.querySelector('.header__nav').classList.toggle('open');
// })

export default function Header() {
  return (
    <div className="header">
      <div className="container header__container">
        <a href="/" className="header__logo">
          <LogoIcon />
        </a>

        <div className="header__nav">
          <a id="Home" href="/" className="header__a">
            Home
          </a>
          <a id="Work" href="/" className="header__a">
            Work
          </a>
          <a id="Contact" href="/" className="header__a">
            Contact
          </a>
        </div>
        <div className="burger">
        <span></span>
      </div>
      </div>
      
    </div>
  );
}
