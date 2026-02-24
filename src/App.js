import "./App.scss";

function App() {
  return (
    <div className="App">
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
        <button className="login-btn">Join Now</button>
      </div>
      <div className="hero">
        <video className="hero-video" autoPlay muted loop>
          <source
            src="https://drive.google.com/file/d/1UD2FG95TXdo8q293ODDE_pYiF-mJ6l4k/view?usp=sharing"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default App;
