import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
// importando icon
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'

import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), {
  ssr: false
})

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Meine Reisen"
        description="A simple project to show my favorite places in Germany and World."
      />
      <LinkWrapper href={'/about'}>
        {/* usando icon */}
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
