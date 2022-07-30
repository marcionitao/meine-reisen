import { GetStaticProps } from 'next'
import AboutTemplate from 'templates/About'
import client from '../graphql/client'
import { GET_PAGES } from '../graphql/queries'

// getStaticPaths => serve para gerar as urls em build time /about, /trip/petropolis - estatico
// getStaticProps => serve para buscar dados da página (props), head, body - build time - estático
// getServerSideProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle fica no server)
// getInitialProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle também vem para o client) - hydrate

export default function About() {
  return <AboutTemplate />
}

export const getStaticProps: GetStaticProps = async () => {
  // fazendo requisição para buscar reultado da query
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)

  return {
    props: {}
  }
}
