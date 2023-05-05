import "./App.css";
import NavBar2 from "./Components/NavBar/NavBarNew";
import Home from "./Components/Home/Home";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "./Components/Card/Card";

function App() {
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar2 />
      <section className="night-sky">
        <p
          className="child"
          style={{ transform: `translateY(${offSetY * 0.45}px)` }}
        >
          “I’m such a perfectionist that I'd kinda rather not do it at all than
          do a crappy version.”
        </p>
      </section>
      {/* <div className="position-stay">
        <section className="styled-section">
          <div className="card-container">
            <div className="card">
              <div className="card-background"></div>
              <div className="content">
                <div className="card-category"> testing card</div>
                <h3 className="card-heading"> card header</h3>
              </div>
            </div>
            <div className="card">
              <div className="card-background"></div>
              <div className="content">
                <div className="card-category"> testing card</div>
                <h3 className="card-heading"> card header</h3>
              </div>
            </div>
            <div className="card">
              <div className="card-background"></div>
              <div className="content">
                <div className="card-category"> testing card</div>
                <h3 className="card-heading"> card header</h3>
              </div>
            </div>
          </div>
        </section>
      </div> */}

      <Card />
      <Home />
      <About />
      {/* <body>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </body> */}
    </>
  );
}

export default App;
