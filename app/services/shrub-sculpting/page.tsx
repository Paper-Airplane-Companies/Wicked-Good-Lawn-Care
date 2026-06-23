import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata = {
  title: 'Shrub Sculpting & Trimming | Wicked Good Lawn Care',
  description:
    'Professional shrub trimming and hedge shaping in Alachua County, FL. Veteran-owned lawn care.',
}

export default function ShrubSculptingPage() {
  return (
    <ServicePageLayout
      title="Shrub Sculpting"
      heroImage="/images/services/shrubs.jpg"
      heroAlt="Wicked Good Lawn Care crew member in branded shirt trimming large shrubs with pole hedge trimmer"
      intro="Trimming and shaping shrubs, hedges, and ornamental plants to keep your property clean and your plants healthy."
      whyHeading="Why it matters in North Central Florida"
      whyContent="Florida's subtropical climate means many common shrubs — ligustrum, podocarpus, viburnum, Indian hawthorn — grow actively year-round. Without regular maintenance, they get leggy, heavy, and overgrown fast. Trimming on a consistent schedule is easier on the plant and keeps your property looking intentional instead of neglected."
      included={[
        'Hand trimming and power trimming depending on the plant type',
        'Shaping to natural or formal profiles per your preference',
        'Cleanup and hauling of all trimmings and debris',
        'Eye-level inspection for disease, pests, or storm damage',
      ]}
      secondaryImage="/images/services/detail/shrubs-hand-trim.jpg"
      secondaryAlt="Crew member hand-trimming a large round shrub to a precise shape"
    />
  )
}
