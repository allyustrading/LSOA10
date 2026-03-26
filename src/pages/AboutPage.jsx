import { PageBanner, Section, Card } from '../components/Layout'
import aboutImg from '../assets/about-eco.svg'

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About"
        title="Liuli Society of America is dedicated to education, environmental responsibility, and public benefit"
        text="Liuli Society of America is a U.S. nonprofit organization committed to ecological awareness, wellness education, community-centered initiatives, and research-informed innovation. Our work is designed to strengthen the relationship between people, place, and long-term environmental wellbeing."
        image={aboutImg}
        alt="About page eco nonprofit landscape"
      />

      <Section
        eyebrow="Who we are"
        title="A mission-driven organization rooted in stewardship, learning, and thoughtful action"
        text="This page explains who Liuli Society of America is, why it exists, and why it is intentionally structured as a nonprofit organization with a long-term public-serving mission."
      >
        <div className="grid-2">
          <Card>
            <h3>Our purpose</h3>
            <p>We exist to encourage a more responsible, informed, and compassionate way of living—one that values environmental stewardship, community wellbeing, and a healthier future for people and the planet.</p>
          </Card>
          <Card>
            <h3>Our vision</h3>
            <p>We envision communities that are more ecologically aware, more environmentally responsible, and more connected to sustainable forms of health, education, and daily living.</p>
          </Card>
          <Card>
            <h3>Why the nonprofit model matters</h3>
            <p>The nonprofit structure allows Liuli Society of America to keep public value, education, and mission alignment at the center of its work rather than commercial growth or promotional activity.</p>
          </Card>
          <Card>
            <h3>What we stand for</h3>
            <p>We stand for thoughtful design, research-informed learning, community engagement, ecological respect, and a more balanced relationship between human life and the natural environment.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
