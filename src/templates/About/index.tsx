// importando icon
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

export default function AboutTemplate() {
  return (
    <>
      <S.Content>
        <LinkWrapper href="/">
          {/* usando icon */}
          <CloseOutline size={32} aria-label="Close" />
        </LinkWrapper>
        {/* // */}
        <S.Heading>Meine Reisen</S.Heading>
        {/* // */}
        <S.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quasi
            ab totam tempore fuga exercitationem reiciendis inventore dolores
            autem quibusdam dicta, molestiae aut commodi consequuntur itaque,
            nobis eius! Mollitia, molestias?
          </p>
        </S.Body>
        {/* // */}
      </S.Content>
    </>
  )
}
