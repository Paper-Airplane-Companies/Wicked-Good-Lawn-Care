import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata = {
  title: 'Seasonal Cleanup Services | Wicked Good Lawn Care',
  description:
    'Leaf removal, debris clearing, and yard waste hauling in Alachua County, FL. Year-round cleanup services.',
}

export default function SeasonalCleanupPage() {
  return (
    <ServicePageLayout
      title="Seasonal Cleanup"
      heroImage="/images/services/cleanups.jpg"
      heroAlt="Wicked Good Lawn Care trailer loaded with debris clippings after a property cleanup"
      intro="Clearing leaves, debris, and accumulated yard waste so your property stays clean and healthy between regular maintenance visits."
      whyHeading="Why it matters in North Central Florida"
      whyContent="Seasonal cleanups work differently in North Central Florida than they do up north. Live oaks don't drop in fall — they flush and shed in late winter and early spring. Hurricane season runs June through November and can scatter debris across your yard in a single afternoon. We do cleanups year-round because there's always something to clear here, and it's never on a northern homeowner's expected schedule."
      included={[
        'Leaf blowing, raking, and collection',
        'Removal of downed branches and storm debris',
        'Clearing and refreshing planting beds',
        'Hauling all debris off your property',
      ]}
      secondaryImage="/images/services/detail/cleanups-hauling.jpg"
      secondaryAlt="Two crew members loading brush and debris into a trailer"
    />
  )
}
