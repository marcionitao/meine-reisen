import * as S from './styles'

export default function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Image de um átomo e React Avançado escrito ao lado"
      />
      <S.Title>Hello World!</S.Title>
      <S.Description>
        TypeScript, React, Next and Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código"
      />
    </S.Wrapper>
  )
}
