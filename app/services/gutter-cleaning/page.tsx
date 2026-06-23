import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata = {
  title: 'Gutter Cleaning Services | Wicked Good Lawn Care',
  description:
    'Complete gutter and downspout cleaning in Alachua County, FL. Protect your home from water damage during Florida\'s rainy season.',
}

export default function GutterCleaningPage() {
  return (
    <ServicePageLayout
      title="Gutter Cleaning"
      heroImage="/images/services/gutters.jpg"
      heroAlt="Wicked Good Lawn Care crew member on tall ladder clearing gutters on a residential home"
      intro="Complete gutter and downspout clearing to protect your home from water damage during Florida's heavy rain season."
      whyHeading="Why it matters in North Central Florida"
      whyContent="Alachua County's rainy season runs June through September and can deliver several inches of rain in a single afternoon. If your gutters are clogged, that water has nowhere to go except over the edge and pooling against your foundation. Pair that with the mature oak and pine canopy that covers most of this area and you have gutters that fill faster than most homeowners expect."
      included={[
        'Full gutter clearing by hand from the roofline',
        'Downspout flushing to confirm drainage is clear',
        'Removal and hauling of all debris',
        'Visual inspection and communication about any damage we spot',
      ]}
      secondaryImage="/images/services/detail/gutters-ladder.jpg"
      secondaryAlt="Crew member on orange ladder working at roofline height"
    />
  )
}
