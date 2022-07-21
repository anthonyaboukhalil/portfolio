import About from "./components/About";
const bootstrap = require("bootstrap");
function App() {
  return (
    <section className="section-stories ">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="/img/video.mp4" type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
      <div className="container text-center">
        <h3 className="heading-primary--main">Anthony Abou Khalil</h3>
        <h5 className="heading-primary--sub">Front End Developer</h5>
      </div>
      <div className="arrow bounce"></div>
    </section>
  );
}

export default App;
