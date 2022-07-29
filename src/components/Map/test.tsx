import { render, screen } from '@testing-library/react'
import Map from '.'

describe('Map', () => {
  it('should render without any marker', () => {
    render(<Map />)

    //screen.logTestingPlaygroundURL()
    const mapa = screen.getByRole('link', {
      name: /a javascript library for interactive maps/i
    })

    expect(mapa).toBeInTheDocument()
  })
  it('should render with marker in correct place ', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longetide: 0
      }
    }
    const placeTwo = {
      id: '2',
      name: 'Reykjavik',
      slug: 'reykjavik',
      location: {
        latitude: 129,
        longetide: -21
      }
    }
    // passando um array de objetos
    render(<Map places={[place, placeTwo]} />)

    // screen.debug(screen.getByTitle(/petrópolis/i))

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/reykjavik/i)).toBeInTheDocument()
  })
})
