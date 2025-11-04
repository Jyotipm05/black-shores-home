import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <img
          src="/vite.svg"
          alt="Wuthering Waves Black Shores Logo"
          className="app-logo"
        />
        <h1 className="app-title">Wuthering Waves: Black Shores</h1>
        <h2 className="app-subtitle">
          Welcome to the Home of the Black Shores
        </h2>
        <p className="app-description">
          Embark on an epic journey across the mysterious Black Shores. Discover secrets, meet new companions, and shape your destiny in the world of Wuthering Waves.
        </p>
        <button className="get-started-btn">
          Get Started
        </button>
      </div>
    </>
  )
}

export default App
