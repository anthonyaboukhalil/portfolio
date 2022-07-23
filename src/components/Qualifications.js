import React from "react";
import { Fade } from "react-reveal";
import { IoLogoJavascript, IoLogoHtml5, IoLogoSass } from "react-icons/io";

const Qualifications = () => {
  return (
    <section className="section-about">
      <div className="about">
        <Fade left>
          <h2 className="heading-secondary">Qualifications</h2>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            voluptatum nostrum maxime porro eaque labore aperiam necessitatibus
            velit! Cumque maiores quibusdam fuga nulla libero aspernatur,
            praesentium iusto. Quis, veritatis nihil?
          </p>
        </Fade>
      </div>

      <div className="container container__about text-center">
        <Fade right>
          <div className="row align-items-center">
            <div className="col col__about">
              <i className="col_icon col_icon--html">
                <IoLogoHtml5 />
              </i>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                fuga repellat, nam molestiae cupiditate itaque? Qui a expedita
                accusamus facilis? Natus nesciunt consequatur doloremque nam
                omnis! Minima mollitia consectetur eos.
              </p>
            </div>
            <div className="col col__about">
              <i className="col_icon col_icon--sass">
                <IoLogoSass />
              </i>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                fuga repellat, nam molestiae cupiditate itaque? Qui a expedita
                accusamus facilis? Natus nesciunt consequatur doloremque nam
                omnis! Minima mollitia consectetur eos.
              </p>
            </div>
            <div className="col col__about">
              <i className="col_icon col_icon--js">
                <IoLogoJavascript />
              </i>
              <p className="paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                fuga repellat, nam molestiae cupiditate itaque? Qui a expedita
                accusamus facilis? Natus nesciunt consequatur doloremque nam
                omnis! Minima mollitia consectetur eos.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Qualifications;
