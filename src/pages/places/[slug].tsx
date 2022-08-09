import client from 'graphql/client'
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PlacesTemplate, { PlacesTemplateProps } from 'templates/Places'

export default function Place({ place }: PlacesTemplateProps) {
  const router = useRouter()
  //retorna um loading ou qq coisa enquanto carrega o conteúdo
  if (router.isFallback) return null
  //
  return <PlacesTemplate place={place} />
}

// GERA AS URL's DAS PAGINAS, ou seja, as rotas das páginas
export const getStaticPaths = async () => {
  // fazendo requisição para buscar os dados da query passando a quantidade de páginas a serem exibidas
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  })
  // retornando objeto com os slugs e os dados
  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))
  // fallback: true, para que o navegador não tente buscar a url da página caso o slug não exista
  return { paths, fallback: true }
}

// GERA O CONTEÚDO DAS PAGINAS
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // fazendo requisição para buscar os dados da query slug pretendiada
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: params?.slug as string
    }
  )

  // se a página não existir, redireciona para a página 404
  if (!place) {
    return { notFound: true }
  }

  return {
    props: {
      place
    }
  }
}
