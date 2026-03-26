import { PageBanner, Section, Card } from '../components/Layout'
import supportImg from '../assets/support-eco.svg'

export default function SupportPage() {
  return (
    <>
      <PageBanner
        eyebrow="Support"
        title="Support the growth of a mission dedicated to environmental care and public education"
        text="Liuli Society of America welcomes support that helps expand ecological awareness, sustainability education, community programming, and future mission-aligned innovation."
        image={supportImg}
        alt="Support page eco landscape"
      />

      <Section
        eyebrow="Why support matters"
        title="Growing capacity for public benefit, environmental awareness, and community impact"
        text="Support can include partnership, educational collaboration, volunteer contribution, and future tax-deductible giving."
      >
        <div className="grid-2">
          <Card>
            <h3>Mission-aligned partnership</h3>
            <p>We welcome relationships with institutions, educators, environmental organizations, community leaders, and donors who value thoughtful and public-serving work.</p>
          </Card>
          <Card>
            <h3>Future giving readiness</h3>
            <p>Liuli Society of America is a registered U.S. nonprofit organization. Contributions may be tax-deductible to the extent permitted by law.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
