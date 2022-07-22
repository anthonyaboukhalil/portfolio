import React from "react";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a
                    href="https://www.linkedin.com/in/anthony-abou-khalil-7a9792244/"
                    className="footer__link"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://github.com/anthonyaboukhalil"
                    className="footer__link"
                  >
                    github
                  </a>
                </li>
                <li className="footer__item">
                  <a href="mailto:abk351@gmail.com" className="footer__link">
                    e-mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            {" "}
            <p className="footer__copyright">Built by Anthony Abou Khalil</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
