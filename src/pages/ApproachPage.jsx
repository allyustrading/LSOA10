import { PageBanner, Section, Card } from '../components/Layout'
import approachImg from '../assets/approach-eco.svg'

const steps = [
  ['Understanding first', 'Our approach begins with education and awareness. We believe lasting change starts with a clearer understanding of the relationship between people, health, and the natural environment.'],
  ['Ecology and wellbeing together', 'We treat environmental care and human wellbeing as interconnected. Eco-friendly living, sustainable habits, and public health awareness can support one another in meaningful ways.'],
  ['From values to daily practice', 'We translate ideas into frameworks, community learning experiences, and practical guidance that can influence daily routines and public behavior.'],
  ['Long-term community benefit', 'We prioritize public value, thoughtful engagement, and sustainable mission growth rather than one-time promotion or short-term attention.'],
]

export default function ApproachPage() {
  return (
    <>
      <PageBanner
        eyebrow="Our Approach"
        title="A nonprofit framework that connects environmental care, wellness education, and community action"
        text="Liuli Society of America presents its approach in a clear and professional format that is easy for community audiences, partners, donors, and educational institutions to understand."
        image={approachImg}
        alt="Approach page eco landscape"
      />

      <Section
        eyebrow="How we work"
        title="A structured and mission-aligned way of turning values into action"
        text="Our approach is built around education, ecological responsibility, community support, and long-term public benefit."
      >
        <div className="grid-4">
          {steps.map(([title, text]) => (
            <Card key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
