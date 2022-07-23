const About = () => {
  return (
    <div className="container about-section">
      <div className="row">
        <div className="col about-section__col">
          <section className="about-section__dark">
            <div className="about-section__text">
              <h3 className="about-section__text__header">About Me</h3>
              <p className="about-section__text__paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus illum ducimus non quia consequuntur obcaecati eum
                atque modi voluptas. Modi quod enim, vero omnis reiciendis
                eaque? Accusantium aperiam iure amet.
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
              </ul>
            </div>
            <div className="about-section__text">
              <h3 className="about-section__text__header--learning">
                Learning
              </h3>
              <ul className="about-section__text__list--learning">
                <li className="about-section__text__list__item--learning">
                  Coding
                </li>
                <li className="about-section__text__list__item--learning">
                  Reading
                </li>
                <li className="about-section__text__list__item--learning">
                  Jiu Jitsu
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
