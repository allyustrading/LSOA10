import { PageBanner, Section, Card } from '../components/Layout'
import researchImg from '../assets/research-eco.svg'

export default function ResearchPage() {
  return (
    <>
      <PageBanner
        eyebrow="Research & Innovation"
        title="Research-informed thinking for ecological awareness and healthier communities"
        text="Liuli Society of America supports a research-informed approach to environmental education, sustainable living, and public-facing innovation. Our goal is to combine thoughtful inquiry with practical community value."
        image={researchImg}
        alt="Research eco landscape"
      />

      <Section
        eyebrow="Research direction"
        title="A calm and credible platform for learning, inquiry, and future collaboration"
        text="This section is designed to present seriousness, thoughtfulness, and nonprofit legitimacy without drifting into technical jargon or commercial messaging."
      >
        <div className="grid-2">
          <Card>
            <h3>Environmental education</h3>
            <p>We are interested in how research and learning can help communities better understand sustainability, ecological care, and the long-term effects of daily choices.</p>
          </Card>
          <Card>
            <h3>Public-serving innovation</h3>
            <p>Innovation is framed as responsible exploration—new ways to support education, community engagement, and environmental responsibility.</p>
          </Card>
          <Card>
            <h3>Collaboration potential</h3>
            <p>This page can support conversations with educators, researchers, environmental advocates, and institutions interested in mission-aligned partnerships.</p>
          </Card>
          <Card>
            <h3>Community relevance</h3>
            <p>The aim is not simply to study ideas, but to translate them into practical value for public learning, supportive initiatives, and more sustainable community life.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
