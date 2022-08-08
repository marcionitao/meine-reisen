import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'
import client from '../graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from '../graphql/queries'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()
  //retorna um loading ou qq coisa enquanto carrega o conteúdo
  if (router.isFallback) return null
  //
  return <PageTemplate heading={heading} body={body} />
}

// GERA AS URL's DAS PAGINAS, ou seja, as rotas das páginas
export const getStaticPaths = async () => {
  // fazendo requisição para buscar os dados da query passando a quantidade de páginas a serem exibidas
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })
  // retornando objeto com os slugs e os dados
  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))
  // fallback: true, para que o navegador não tente buscar a url da página caso o slug não exista
  return { paths, fallback: true }
}

// GERA O CONTEÚDO DAS PAGINAS
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // fazendo requisição para buscar os dados da query slug pretendiada
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: params?.slug as string
  })

  // se a página não existir, redireciona para a página 404
  if (!page) {
    return { notFound: true }
  }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
// getStaticPaths => serve para gerar as urls em build time /about, /trip/petropolis - estatico
// getStaticProps => serve para buscar dados da página (props), head, body - build time - estático
// getServerSideProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle fica no server)
// getInitialProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle também vem para o client) - hydrate
