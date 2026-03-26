import { PageBanner, Section, Card } from '../components/Layout'
import pathwaysImg from '../assets/pathways-eco.svg'

const pathways = [
  ['Nature Protection & Stewardship', 'Encouraging respect for ecosystems, habitat awareness, and the long-term importance of environmental care.'],
  ['Eco-Friendly Daily Living', 'Promoting more sustainable choices in home life, routines, consumption, and personal habits.'],
  ['Wellness & Environmental Balance', 'Exploring how healthier environments can contribute to healthier communities and better daily living.'],
  ['Clean Living & Conscious Use', 'Supporting reduced waste, thoughtful use of resources, and cleaner patterns of everyday behavior.'],
  ['Community Education', 'Creating public learning opportunities that make environmental and wellness topics more accessible.'],
  ['Youth & Family Awareness', 'Encouraging families and younger generations to build values of environmental responsibility and shared care.']
]

export default function PathwaysPage() {
  return (
    <>
      <PageBanner
        eyebrow="Pathways"
        title="Pathways that connect sustainability, education, and everyday wellbeing"
        text="Our pathways provide a structured way to communicate how ecological awareness, sustainable living, and community wellbeing can reinforce one another within a nonprofit mission."
        image={pathwaysImg}
        alt="Pathways eco nonprofit landscape"
      />

      <Section
        eyebrow="Framework"
        title="A more meaningful model than a campaign-based website"
        text="These pathways are designed to be educational, public-serving, and future-ready. They create space for community learning, partnership, and long-term mission growth."
      >
        <div className="grid-3">
          {pathways.map(([title, text]) => (
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
