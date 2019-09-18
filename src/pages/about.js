import React from "react";
import FullImage from "../components/full-image.js"
import Nav from "../components/nav.js"
import Footer from "../components/footer.js"

import kide from "../assets/kide.png"
import teamMember1 from "../assets/team_member_1.png"
import teamMember2 from "../assets/team_member_2.png"
import teamMember3 from "../assets/team_member_3.png"
import uniplaces from "../assets/uniplaces.png"
import simplyBusiness from "../assets/simply_business.png"

const Header = () => (
  <section class="section" style={{position: "relative", background: "#F7F7F7", height: "414px"}}>
    <div class="container" style={{height: "100%"}}>
      <div class="level columns" style={{height: "100%"}}>
        <div class="column">
          <p class="is-size-5 has-text-weight-bold has-italic">About Coverflex</p>
          <h1 class="is-size-3 has-text-weight-bold">Get to know us</h1>
        </div>
        <p class="is-size-6 has-text-weight-bold is-italic column">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam tincidunt tincidunt. Donec eu purus urna. Aliquam viverra odio sed urna pharetra, non suscipit turpis eleifend. Aliquam sit amet sollicitudin ipsum. Pellentesque pellentesque condimentum feugiat. Etiam nec nisl nulla. Nam molestie at nisi eu faucibus. Phasellus felis augue, vulputate non eros nec, volutpat pretium ante.</p>
      </div>
    </div>
  </section>
)

const Team = () => (
  <section class="section">
    <div class="container">
      <div class="level columns">
        <div class="column">
          <p class="is-size-5 has-text-weight-bold has-italic">Meet the team</p>
          <h1 class="is-size-3 has-text-weight-bold">A team with experience in industry disruption</h1>
        </div>
        <div class="column"></div>
      </div>
      <div class="tile is-12">
        <div class="tile is-parent is-vertical is-5">
          <div class="tile is-child">
            <p class="is-size-6 has-text-weight-bold is-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam tincidunt tincidunt. Donec eu purus urna. Aliquam viverra odio sed urna pharetra, non suscipit turpis eleifend. Aliquam sit amet sollicitudin ipsum. Pellentesque pellentesque condimentum feugiat. Etiam nec nisl nulla. Nam molestie at nisi eu faucibus. Phasellus felis augue, vulputate non eros nec, volutpat pretium ante.</p>
          </div>
          <div class="tile is-child is-vertical">
            <TeamMember
              name="José Airosa"
              position="CTO - Technology"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam tincidunt tincidunt. Donec eu purus urna. Aliquam viverra odio sed urna pharetra, non suscipit turpis eleifend. Aliquam sit amet sollicitudin ipsum. Pellentesque pellentesque condimentum feugiat. Etiam nec nisl nulla. Nam molestie at nisi eu faucibus. Phasellus felis augue, vulputate non eros nec, volutpat pretium ante."
              image={teamMember2}
              imageAlt="José Airosa, CTO - Technology"
              companyLogo={simplyBusiness}
              companyAlt="Simply Business logo"
            />
          </div>
          <div class="tile is-child is-vertical">
            <TeamMember
              name="José Airosa"
              position="CTO - Technology"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam tincidunt tincidunt. Donec eu purus urna. Aliquam viverra odio sed urna pharetra, non suscipit turpis eleifend. Aliquam sit amet sollicitudin ipsum. Pellentesque pellentesque condimentum feugiat. Etiam nec nisl nulla. Nam molestie at nisi eu faucibus. Phasellus felis augue, vulputate non eros nec, volutpat pretium ante."
              image={teamMember2}
              imageAlt="José Airosa, CTO - Technology"
              companyLogo={simplyBusiness}
              companyAlt="Simply Business logo"
            />
          </div>
        </div>
        <div class="tile"></div>
        <div class="tile is-parent is-vertical is-5">
          <div class="tile is-child">
            <TeamMember
              name="Nuno Pinto"
              position="CEO - Insurance & Product"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam tincidunt tincidunt. Donec eu purus urna. Aliquam viverra odio sed urna pharetra, non suscipit turpis eleifend. Aliquam sit amet sollicitudin ipsum. Pellentesque pellentesque condimentum feugiat. Etiam nec nisl nulla. Nam molestie at nisi eu faucibus. Phasellus felis augue, vulputate non eros nec, volutpat pretium ante."
              image={teamMember1}
              imageAlt="Nuno Pinto, CEO - Insurance & Product"
              companyLogo={kide}
              companyAlt="Kide logo"
            />
          </div>
          <div class="tile is-child">
            <TeamMember
              name="Miguel Santo Amaro"
              position="Non-exec - Strategy & Growth"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam tincidunt tincidunt. Donec eu purus urna. Aliquam viverra odio sed urna pharetra, non suscipit turpis eleifend. Aliquam sit amet sollicitudin ipsum. Pellentesque pellentesque condimentum feugiat. Etiam nec nisl nulla. Nam molestie at nisi eu faucibus. Phasellus felis augue, vulputate non eros nec, volutpat pretium ante."
              image={teamMember3}
              imageAlt="Miguel Santo Amaro, Non-exec - Strategy & Growth"
              companyLogo={uniplaces}
              companyAlt="Uniplaces logo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

const TeamMember = ({name, position, description, image, imageAlt, companyLogo, companyAlt}) => (
  <div>
    <img src={image} alt={{imageAlt}} />
    <p class="is-size-3 has-text-weight-bold">{name}</p>
    <p class="is-size-6 has-text-weight-bold is-italic">{position}</p>
    <img src={companyLogo} alt={companyAlt} style={{margin: "24px 0"}}/>
    <p class="is-size-6 has-text-weight-bold is-italic">{description}</p>
  </div>
)

const Jobs = () => (
  <section class="section">
    <div class="container" style={{padding: "104px 76px", background: "#F7F7F7"}}>
      <div class="level columns">
        <div class="column">
          <p class="is-size-5 has-text-weight-bold has-italic">Disrupt the insurance market</p>
          <h1 class="is-size-3 has-text-weight-bold">Join the Coverflex team</h1>
        </div>
        <div class="column"></div>
      </div>
      <div class="level columns">
        <div class="column">
          <Job position="Frontend Developer" location="Braga, Portugal" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam tincidunt tincidunt. Donec eu purus urna." />
        </div>
        <div class="column">
          <Job position="Sales Representative" location="Braga, Portugal" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam tincidunt tincidunt. Donec eu purus urna." />
        </div>
        <div class="column">
          <Job position="HR Manager" location="Braga, Portugal" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam tincidunt tincidunt. Donec eu purus urna." />
        </div>
      </div>
    </div>
  </section>
)

const Job = ({position, location, description}) => (
  <div>
    <p class="is-size-5 has-text-weight-bold">{position}</p>
    <p class="is-size-6 has-text-weight-bold is-italic">{location}</p>
    <p class="is-size-6 has-text-weight-bold is-italic" style={{padding: "32px 0"}}>{description}</p>
  </div>
)

const AboutPage = () => (
  <div>
    <Nav />
    <Header />
    <FullImage src="about-splash-1.png" height="525" margin="0" alt="Team photo"/>
    <Team />
    <FullImage src="about-splash-2.png" height="525" alt="Office photo"/>
    <Jobs />
    <Footer />
  </div>
)

export default AboutPage
