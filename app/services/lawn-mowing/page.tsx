import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata = {
  title: 'Lawn Care Services | Wicked Good Lawn Care',
  description:
    'Professional lawn mowing, edging, trimming, and blowing in Alachua County, FL. Veteran-owned, reliable, and detailed.',
}

export default function LawnMowingPage() {
  return (
    <ServicePageLayout
      title="Lawn Care"
      heroImage="/images/services/lawn-care.jpg"
      heroAlt="Zero-turn mower creating perfect stripes on a green Florida lawn"
      intro="Mowing, edging, trimming, and blowing on a schedule that keeps your lawn healthy and sharp all season."
      whyHeading="Why it matters in North Central Florida"
      whyContent="St. Augustine grass is the most common turf type in North Central Florida, and it needs specific care to stay healthy. In the growing season — roughly April through October — it can put on an inch or more of growth per week. Cut it too short and you stress the root system. Let it get too long and you're looking at scalping, clumping, and fungal problems. Getting the height and frequency right makes a bigger difference than most homeowners realize."
      included={[
        'Mowing at the proper height for your grass type',
        'String trimming around all obstacles, fence lines, and structures',
        'Edging along driveways, sidewalks, and bed borders',
        'Blowing clippings off hard surfaces',
        'Mulching clippings back into the turf — no bagging, no waste',
      ]}
      secondaryImage="/images/services/detail/lawn-mowing-action.jpg"
      secondaryAlt="Stand-on mower at dramatic low angle on a Florida residential lawn"
    />
  )
}
