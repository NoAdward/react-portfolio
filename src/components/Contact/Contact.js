import MessegeIcon from "../icons/MessegeIcon";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="container contact">
      <div className="title">Contact Me</div>
      <div className="contact__desc">
        If you are looking to hire a product designer, I’m currently available
        for freelance work
      </div>
      <a href="/" className="btn contact__btn">
        <MessegeIcon />
        <span>hi@yourname.com</span>
      </a>
    </div>
  );
}
