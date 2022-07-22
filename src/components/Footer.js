import React from "react";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            {" "}
            <div class="footer__navigation">
              <ul class="footer__list">
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Company
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Contact us
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Carrers
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
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
