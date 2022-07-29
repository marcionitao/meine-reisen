import { render, screen } from '@testing-library/react'
import LinkeWrapper from '../LinkWrapper/index'

describe('LinkeWrapper', () => {
  it('should render link and children', () => {
    render(<LinkeWrapper href="/my-link">Anything</LinkeWrapper>)

    const children = screen.getByRole('link', { name: 'Anything' })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  })
})
