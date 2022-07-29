import * as S from './styles'
import Link from 'next/link'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}
export default function LinkWrapper({ href, children }: LinkWrapperProps) {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  )
}
