import { PageBanner, Section, Card } from '../components/Layout'
import contactImg from '../assets/contact-eco.svg'

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Start a conversation about sustainability, education, or community partnership"
        text="We welcome inquiries related to ecological awareness, environmental education, research collaboration, community programming, volunteer interest, and mission-aligned support."
        image={contactImg}
        alt="Contact eco landscape"
      />

      <Section
        eyebrow="Get in touch"
        title="Open the next conversation"
        text="This contact page is designed to support future conversations with educators, partners, volunteers, donors, and communities who share the mission."
      >
        <div className="grid-2">
          <Card>
            <h3>Inquiry areas</h3>
            <p>Environmental education, sustainability initiatives, community partnership, research collaboration, volunteer participation, and mission-aligned support.</p>
          </Card>
          <Card>
            <h3>Contact form preview</h3>
            <div className="form-grid">
              <input className="field" placeholder="Your name" />
              <input className="field" placeholder="Email address" />
              <input className="field" placeholder="Subject" />
              <textarea className="field" rows="6" placeholder="How would you like to connect with Liuli Society of America?" />
              <button className="button button-dark" style={{ width: 'fit-content' }}>Send inquiry</button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  )
}
