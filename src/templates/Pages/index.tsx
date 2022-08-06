// importando icon
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

export default function PageTemplate({ heading, body }: PageTemplateProps) {
  return (
    <>
      <S.Content>
        <LinkWrapper href="/">
          {/* usando icon */}
          <CloseOutline size={32} aria-label="Close" />
        </LinkWrapper>
        {/* // */}
        <S.Heading>{heading}</S.Heading>
        {/* // */}
        <S.Body>
          {/* dangerouslySetInnerHTML serve para renderizar html que pode ter problemas de segurança  */}
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </S.Body>
        {/* // */}
      </S.Content>
    </>
  )
}
