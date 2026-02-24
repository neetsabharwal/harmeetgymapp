import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <div className="header">
          <div className="logo">
            <h2>Harmeet</h2>
            <h6>--Training Gym--</h6>
          </div>
          <div className="nav">
            <ul>
              <li>Home</li>
              <li>Memberships</li>
              <li>Facilities</li>
              <li>Classes</li>
              <li>Shop</li>
            </ul>
          </div>
          <button className="login-btn">JOIN NOW</button>
        </div>
      </div>
      <div className="hero">
        <img
          className="hero-image"
          src={`${process.env.PUBLIC_URL}/assets/hero-image.png`}
          alt="Hero Section"
        />
      </div>
      <section className="about">
        <div className="about-left">
          <div className="about-left-container">
            <h2>About Us</h2>
            <h3>
              Welcome to Harmeet Training Gym, where we are dedicated to helping
              you achieve your fitness goals. Our state-of-the-art facility
              offers a wide range of equipment and classes to suit all fitness
              levels. Whether you're a beginner or a seasoned athlete, our
              experienced trainers are here to support you every step of the
              way. Join us today and start your fitness journey with us!
            </h3>
          </div>
        </div>
        <div className="about-right">
          <h2>Meet the Instructors</h2>
          <img
            className="inst-img"
            src={`${process.env.PUBLIC_URL}/assets/harmeet.png`}
            alt="Instructor image"
          ></img>
          <h4>Harmeet</h4>
        </div>
      </section>
    </div>
  );
}

export default App;
