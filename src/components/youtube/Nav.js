import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info">
    <div className="container">
      <button className="navbar-toggler" data-toggle="collapse" data-target="#Navbar">
<span className="navbar-toggler-icon"></span>
      </button>
      <a href="#" className="navbar-brand"><i className="fab fa-youtube"></i><h3>TuneTube</h3></a>
        <div className="collapse navbar-collapse" id="Navbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a href="#Videos" className="nav-link">Latest</a></li>
            <li className="nav-item"><a href="#Videos" className="nav-link">Videos</a></li>
            <li className="nav-item"><a href="#Downloads" className="nav-link">Downloads</a></li>
            <li className="nav-item"><a href="#Results" className="nav-link">Trending</a></li>
        </ul>
      </div>
      </div>
      </nav>
  )
}

export default Nav;