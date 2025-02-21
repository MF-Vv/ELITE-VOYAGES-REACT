import aboutImg from "../images/about.jpeg"
import { Title } from "./"

const About = () => {
  return (
    <section className="section" id="about">
      <Title title={"About"} subTitle={"Us"} />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>Crafting Unforgettable Journeys</h3>
          <p>
            With a commitment to excellence, we curate unique travel experiences
            that blend luxury, adventure, and culture to create lifelong
            memories.
          </p>
          <p>
            We are passionate about creating unforgettable experiences. Whether
            you seek adventure, relaxation, or cultural exploration, we bring
            the world closer to you.
          </p>

          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  )
}

export default About
