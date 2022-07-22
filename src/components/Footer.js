import React from "react";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            {" "}
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Carrers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Terms
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
