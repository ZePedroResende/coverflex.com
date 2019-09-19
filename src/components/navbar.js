import React from "react"
import coverflex from "../images/how_it_works/coverflex.svg"
import "../styles/navbar.sass"

export default Navbar => (
  <div>
    <nav
      class="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src={coverflex}></img>
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="cfNavbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="cfNavbar" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item">About</a>
          <a class="navbar-item">How it works</a>
          <a class="navbar-item">Plans</a>
          <a class="navbar-item">Support</a>
          <div class="navbar-item">
            <a class="button is-primary">
              <div class="text-button">Dashboard</div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
)
