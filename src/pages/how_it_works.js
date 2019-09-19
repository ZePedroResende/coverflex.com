import React from "react"
import "../styles/how_it_works.sass"
import phone from "../images/how_it_works/phone.svg"
import laptop from "../images/how_it_works/laptop.svg"
import Navbar from "../components/navbar"

const Phone = () => (
  <section class="section">
    <div class="container ">
      <div class="tile is-ancestor">
        <div class="tile is-vertical ">
          <div class="tile">
            <div class="tile is-parent is-vertical ">
              <div class="tile is-child"></div>
              <div class="tile is-child ">
                <h1 class="subtitle">That's awesome, but</h1>
                <h2 class="title">How does it work?</h2>
              </div>
              <div class="tile is-child "></div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child">
                <img src={phone}></img>
              </article>
            </div>
            <div class="tile is-parent is-vertical ">
              <article class="tile is-child"></article>
              <article class="tile is-child">
                <h1 class="subtitle">
                  Transparent and easier to understand insurance products that
                  respond to your needs.
                </h1>
              </article>
              <article class="tile is-child">
                <h1 class="subtitle">
                  Simple and fully digital policy management & claims process.
                </h1>
              </article>
              <article class="tile is-child"></article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Setup = () => (
  <section class="section">
    <div class="container">
      <div className="columns is-vcentered">
        <div className="column ">
          <div className="has-text-centered ">
            <p class="subtitle">Let’s start from the top</p>
            <p class="title">Painless and automated setup</p>
          </div>

          <br />
          <br />
          <div className="columns ">
            <div className="column ">
              <h5 class="is-size-1" style={{ color: "#F0814D" }}>
                01
              </h5>

              <div className="columns ">
                <div className="column is-1"></div>
                <div className="column ">
                  <h2 class="title">Select a plan that works for you</h2>
                  <h1 class="subtitle">
                    Pay per employee, per month, or get in touch with us for a
                    custom solution that fits you business model and market
                    needs
                  </h1>
                </div>
              </div>
            </div>
            <div className="column ">
              <h5 class="is-size-1" style={{ color: "#F0814D" }}>
                02
              </h5>

              <div className="columns ">
                <div className="column is-1"></div>
                <div className="column ">
                  <h2 class="title">Select a plan that works for you</h2>
                  <h1 class="subtitle">
                    Pay per employee, per month, or get in touch with us for a
                    custom solution that fits you business model and market
                    needs
                  </h1>
                </div>
              </div>
            </div>
            <div className="column ">
              <h5 class="is-size-1" style={{ color: "#F0814D" }}>
                03
              </h5>

              <div className="columns ">
                <div className="column is-1"></div>
                <div className="column ">
                  <h2 class="title">Select a plan that works for you</h2>
                  <h1 class="subtitle">
                    Pay per employee, per month, or get in touch with us for a
                    custom solution that fits you business model and market
                    needs
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Support = () => (
  <section class="section ">
    <div className="container notification">
      <div className="section">
        <p className="is-size-7" style={{ paddingBottom: "25px" }}>
          Supported Integration
        </p>
        <div className="is-flex" style={{ justifyContent: "space-between" }}>
          <FakeCustomer />
          <FakeCustomer />
          <FakeCustomer />
          <FakeCustomer />
          <FakeCustomer />
        </div>
      </div>
    </div>
  </section>
)

const FakeCustomer = () => (
  <div>
    <figure class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png" />
    </figure>
  </div>
)

const Dashboard = () => (
  <div className="section">
    <div className="container">
      <div className="hero ">
        <div className="hero-body">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <p className="is-size-5">Stay in control</p>
              <p className="is-size-3 has-text-weight-bold">
                Monitor everything in one place
              </p>
              <br />
              <br />
              <p className="is-size-5 has-text-weight-bold">
                Digital Claims Manager
              </p>
              <p>
                Get claim status and updates on the go, solve everything with
                clicks isntead of papers. All the required information isn
                neatly ornized in the same place for you to access whenever you
                want.
              </p>
            </div>
            <img src={laptop} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Start = () => (
  <section class="section ">
    <div className="container notification">
      <div className="section">
        <div className="is-flex" style={{ justifyContent: "space-between" }}>
          <div>
            <p class="subtitle">Select your plan</p>
            <p class="title">Are you ready to start?</p>
            <div className="button is-primary is-rounded is-medium">
              <span className="is-size-6">Get started</span>
            </div>
          </div>
          <div>
            <p class="subtitle">Support</p>
            <p class="title">Have specific needs?</p>
            <b className="is-size-6" style={{ color: "#F0814D" }}>
              Let's talk
            </b>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default () => (
  <div>
    <Navbar />
    <Phone />
    <Setup />
    <Support />
    <Dashboard />
    <Start />
  </div>
)
