import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'
import { GetStaticProps } from 'next'
import HomeTemplate from 'templates/Home'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

// GERA O CONTEÚDO DAS PAGINAS
export const getStaticProps: GetStaticProps = async () => {
  // fazendo requisição para buscar os dados da query slug pretendiada
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    //slug: params?.slug as string
  })

  return {
    props: {
      places
    }
  }
}
