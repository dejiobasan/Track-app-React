import { Link } from "react-router-dom";


function Landing() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            Trackapp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content">
        <h1>Trackapp</h1>
        <p>
          Trackapp is web application used to track user location and also used
          to navigate.
        </p>
        <p>Click the button below to get started.</p>
        <Link className="btn" to="/map" role="button" >
          Get Started
        </Link>
      </div>

      <div className="img">
        <img src="" alt="an image" width="400" height="250" />
      </div>

      <div className="footer-padding">
        <div className="footer">
          <p>Made by Ayodeji Obasan.</p>
        </div>
      </div>
    </>
  );
}

export default Landing;