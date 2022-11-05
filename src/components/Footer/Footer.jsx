import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Something</h1>
        <h2>Contact</h2>
        <address>
          <h5>01157068530</h5>
          <Link className="footer__btn" to="/">
            Email Us
          </Link>
        </address>
      </div>
      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Media</h2>

          <ul className="nav__ul">
            <li>
              <Link to="/">Online</Link>
            </li>

            <li>
              <Link to="/">Print</Link>
            </li>

            <li>
              <Link to="/">Alternative Ads</Link>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Technology</h2>

          <ul className="nav__ul">
            <li>
              <Link to="/">HLinkardware Design</Link>
            </li>

            <li>
              <Link to="/">Software Design</Link>
            </li>

            <li>
              <Link to="/">Digital Signage</Link>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>

          <ul className="nav__ul">
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>

            <li>
              <Link to="/">Terms of Use</Link>
            </li>

            <li>
              <Link to="/">Sitemap</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="legal">
        <p>&copy; {`${year} Something. All rights reserved.`}</p>

        <div className="legal__links">
          <span>
            Made with <span className="heart">MOhmed Mahmoud</span> remotely
            from Anywhere
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
