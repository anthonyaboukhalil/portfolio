import { Outlet } from "react-router-dom";
import Qualifications from "./components/Qualifications";
const bootstrap = require("bootstrap");
function App() {
  return (
    <>
      <section className="section-header ">
        <div className="bg-video">
          <video className="bg-video__content">
            <source src="/img/video.mp4" type="video/mp4" />
            <source src="/img/video.webm" type="video/webm" />
            Your browser is not supported!
          </video>
        </div>
        <div className="container text-center">
          <h3 className="heading-primary--main">Anthony Abou Khalil</h3>
          <h5 className="heading-primary--sub">Web Developer</h5>
        </div>
        <div className="arrow bounce"></div>
        <Outlet />
      </section>
      <Qualifications />
    </>
  );
}

export default App;
