import { Hero, Section, Card } from '../components/Layout'
import heroImg from '../assets/hero-eco.svg'
import pathwaysImg from '../assets/pathways-eco.svg'
import researchImg from '../assets/research-eco.svg'

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Liuli Society of America"
        title="Promoting ecological awareness, thoughtful living, and community-centered wellbeing"
        text="Liuli Society of America is a U.S. nonprofit organization dedicated to advancing nature protection, eco-conscious thinking, wellness education, and research-informed community initiatives. We believe a healthier future depends on a more respectful relationship between people, community, and the natural world."
        image={heroImg}
        alt="Nature protection themed hero landscape"
      >
        <div className="hero-actions">
          <a href="#/about" className="button button-gold">Discover the mission</a>
          <a href="#/support" className="button button-light">Support the work</a>
        </div>

        <div className="hero-points">
          <div className="point">
            <strong>Nature protection</strong>
            <span>Promoting environmental stewardship, public awareness, and responsible living.</span>
          </div>
          <div className="point">
            <strong>Eco-friendly thinking</strong>
            <span>Encouraging sustainable habits, reduced waste, and more thoughtful daily choices.</span>
          </div>
          <div className="point">
            <strong>Wellness education</strong>
            <span>Connecting ecological awareness with healthier, more balanced everyday living.</span>
          </div>
          <div className="point">
            <strong>Community action</strong>
            <span>Supporting collaboration, public learning, and mission-aligned initiatives.</span>
          </div>
        </div>
      </Hero>

      <Section
        eyebrow="Our mission"
        title="A nonprofit platform for environmental responsibility, education, and long-term public value"
        text="Liuli Society of America is designed to communicate trust, care, and institutional clarity. It brings together ecological awareness, wellness learning, research-informed exploration, and community-centered support in a way that is both professional and approachable."
      >
        <div className="grid-3">
          <Card>
            <h3>Nature and ecological stewardship</h3>
            <p>We promote a deeper respect for ecosystems, environmental balance, and the responsibility people share in protecting the natural world for future generations.</p>
          </Card>
          <Card>
            <h3>Eco-conscious everyday living</h3>
            <p>We encourage practices that support sustainability, mindful consumption, and a healthier way of living that is aligned with environmental responsibility.</p>
          </Card>
          <Card>
            <h3>Community-centered wellbeing</h3>
            <p>We work to connect environmental awareness with education, public benefit, and supportive community initiatives that improve quality of life.</p>
          </Card>
        </div>

        <div className="split-feature">
          <div className="feature-media">
            <img src={pathwaysImg} alt="Pathways landscape visual" />
          </div>
          <div className="feature-panel">
            <div className="eyebrow">Pathways for impact</div>
            <h2 className="section-title">A framework that connects ecological values with everyday wellbeing</h2>
            <p className="section-text">
              Our pathways are designed to help people understand how environmental care,
              thoughtful living, and human wellbeing can reinforce one another. This creates
              a clearer and more meaningful nonprofit structure than a product-led or
              campaign-led model.
            </p>
            <a href="#/pathways" className="button button-dark">Explore the pathways</a>
          </div>
        </div>

        <div className="split-feature">
          <div className="feature-panel">
            <div className="eyebrow">Research and learning</div>
            <h2 className="section-title">Responsible exploration for a more sustainable future</h2>
            <p className="section-text">
              Liuli Society of America supports research-informed thinking, educational
              programming, and future-facing initiatives that encourage environmental care,
              community resilience, and sustainable daily practices.
            </p>
            <a href="#/research" className="button button-dark">View research focus</a>
          </div>
          <div className="feature-media">
            <img src={researchImg} alt="Research and sustainability landscape visual" />
          </div>
        </div>
      </Section>
    </>
  )
}
