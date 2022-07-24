const About = () => {
  return (
    <div className="container about-section">
      <div className="row">
        <div className="col about-section__col">
          <section className="about-section__dark">
            <div className="about-section__text">
              <h3 className="about-section__text__header">About Me</h3>
              <p className="about-section__text__paragraph">
                Thank you for your visit and interest in my portfolio website!{" "}
                <br />
                <br />
                My name is Anthony Abou Khalil and I'm a UBC graduate with
                experience in web development, I really enjoy building web apps
                that can save people time and help them go on with their day
                easier.
                <br />
                <br />
                If I could describe a environment it would be a place where I
                can develop and learn new skills everyday by coding and
                collaborating with other developers in order to grow as a team.
                <br />
                <br />
                This website was built with React! For more of my projects
                please visit my GitHub page or my LinkedIn page through the
                links in the footer.
              </p>
            </div>
          </section>
        </div>
        <div className="col about-section__col">
          <section className="about-section__light">
            <div className="about-section__text">
              <h3 className="about-section__text__header"> Hobbies</h3>
              <ul className="about-section__text__list">
                <li className="about-section__text__list__item">Coding</li>
                <li className="about-section__text__list__item">Reading</li>
                <li className="about-section__text__list__item">Jiu Jitsu</li>
                <li className="about-section__text__list__item">
                  Walking my dog
                </li>
                <li className="about-section__text__list__item">
                  Football (Not soccer)
                </li>
              </ul>
            </div>
            <div className="about-section__text">
              <h3 className="about-section__text__header--learning">
                Learning
              </h3>
              <ul className="about-section__text__list--learning">
                <li className="about-section__text__list__item--learning">
                  GraphQl
                </li>
                <li className="about-section__text__list__item--learning">
                  TypeScript
                </li>
                <li className="about-section__text__list__item--learning">
                  Vue JS
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
