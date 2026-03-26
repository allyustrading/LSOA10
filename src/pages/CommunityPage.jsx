import { PageBanner, Section, Card } from '../components/Layout'
import communityImg from '../assets/community-eco.svg'

export default function CommunityPage() {
  return (
    <>
      <PageBanner
        eyebrow="Community"
        title="Community work that encourages participation, stewardship, and shared responsibility"
        text="Liuli Society of America exists not only to promote ideas, but to make them useful for real communities through education, dialogue, volunteer engagement, and long-term public benefit."
        image={communityImg}
        alt="Community eco landscape"
      />

      <Section
        eyebrow="Community value"
        title="Building a culture of ecological respect and collective care"
        text="The community section is designed to communicate that environmental responsibility is strongest when it is shared, learned, and practiced together."
      >
        <div className="grid-3">
          <Card>
            <h3>Educational events</h3>
            <p>Workshops, talks, and public learning opportunities that make environmental care and sustainable living easier to understand.</p>
          </Card>
          <Card>
            <h3>Volunteer opportunities</h3>
            <p>Mission-aligned roles for people who want to contribute time, care, and practical support to environmental and community-centered initiatives.</p>
          </Card>
          <Card>
            <h3>Public partnership</h3>
            <p>Collaborative opportunities with schools, community groups, environmental advocates, and local organizations that share the mission.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
