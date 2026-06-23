import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata = {
  title: 'Mulching Services | Wicked Good Lawn Care',
  description:
    'Professional mulch installation for residential and commercial properties in Alachua County, FL.',
}

export default function MulchingPage() {
  return (
    <ServicePageLayout
      title="Mulching"
      heroImage="/images/services/mulching.jpg"
      heroAlt="Freshly mulched curved driveway island bed with shaped shrubs and clean edges"
      intro="Fresh mulch applied right keeps your beds looking clean, retains soil moisture, and slows weed growth between visits."
      whyHeading="Why it matters in North Central Florida"
      whyContent="Alachua County summers are long and they alternate between intense heat and heavy rain. That cycle is hard on plants and on soil. A 2–3 inch layer of mulch keeps root zones cooler, holds moisture between rain events, and dramatically slows the weed pressure that comes with this climate. It also defines your beds cleanly, which makes the whole property look more intentional."
      included={[
        'Clearing and refreshing existing beds before application',
        'Mulch delivery and installation',
        'Bed edging to define clean, sharp lines',
        'Cleanup of excess mulch from surrounding surfaces',
      ]}
      secondaryImage="/images/services/detail/mulching-commercial.jpg"
      secondaryAlt="Commercial property with freshly mulched beds in a parking lot island"
    />
  )
}
