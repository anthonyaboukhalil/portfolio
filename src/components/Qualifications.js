import React from "react";
import { Fade } from "react-reveal";
import { IoLogoJavascript, IoLogoHtml5, IoLogoSass } from "react-icons/io";

const Qualifications = () => {
  return (
    <section className="section-qualifications">
      <div className="qualifications">
        <Fade left>
          <h2 className="heading-secondary">Qualifications</h2>
          <p className="paragraph">
            Throughout my time at university I've worked with different
            languages,frameworks,and libraries that include HTML, CSS, JS
            ,React, Redux, Ruby on Rails, Node, Express and striving to build on
            top of them every single day.
          </p>
        </Fade>
      </div>

      <div className="container container__qualifications text-center">
        <Fade right>
          <div className="row align-items-center">
            <div className="col col__qualifications">
              <i className="col_icon col_icon--html">
                <IoLogoHtml5 />
              </i>
              <p className="paragraph">
                Experience with building modern, semantic and accessible HTML5
                in addition to creating common components and layout patterns
                for professional website design and development.
              </p>
            </div>
            <div className="col col__qualifications">
              <i className="col_icon col_icon--sass">
                <IoLogoSass />
              </i>
              <p className="paragraph">
                I am familiar with CSS preprocessors that simplify the process
                of styling responsive websites and structuring them using grid
                layouts and flexbox, in addition to modern CSS techniques to
                create stunning designs and effects that are responsive on
                different devices.
              </p>
            </div>
            <div className="col col__qualifications">
              <i className="col_icon col_icon--js">
                <IoLogoJavascript />
              </i>
              <p className="paragraph">
                A solid foundation in javascript is essential and allows me to
                use many libraries and frameworks that are built with javascript
                such as React, Node, Redux and many more. Moreover, being
                famililar with the npm ecosystem makes the development process
                and the workflow within the team more robust.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Qualifications;
