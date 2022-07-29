import { MapContainer, Marker, TileLayer } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longetide: number
  }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places?.map(({ id, name, slug, location }) => {
        const { latitude, longetide } = location
        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longetide]}
            title={name}
          />
        )
      })}
    </MapContainer>
  )
}

export default Map