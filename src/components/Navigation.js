import { Link } from "react-router-dom";
const toggle = () => {
  const btn = document.getElementsByClassName("navigation__checkbox");
  btn.toggle();
};

const Navigation = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/" onClick={toggle} className="navigation__link">
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/About" onClick={toggle} className="navigation__link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
