import Pageheader from '@/components/sections/Pageheader'
import Gallery from '@/components/sections/Gallery'
import Pricing from '@/components/sections/Pricing'
import Map from '@/components/sections/Map'
import Reviews from '@/components/sections/Reviews'

export default function PropertiesPage() {
  return (
    <>
      <Pageheader />
      <Gallery />
      <Pricing />
      <Map />
      <Reviews />
    </>
  )
}