import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Offer, Location } from '../../types/offer';

type MapProps = {
  offers: Offer[];
  city: Location;
};

function Map({ offers, city }: MapProps): JSX.Element {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      return;
    }

    mapRef.current = L.map('map', {
      center: [city.latitude, city.longitude],
      zoom: 13,
      zoomControl: false
    });

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '© OpenStreetMap contributors'
      }
    ).addTo(mapRef.current);

    offers.forEach((offer) => {
      L.marker([offer.location.latitude, offer.location.longitude], {
        icon: L.icon({
          iconUrl: 'img/pin.svg',
          iconSize: [40, 40],
          iconAnchor: [20, 40]
        })
      }).addTo(mapRef.current!);
    });
  }, [offers, city]);

  return <div id="map" className="cities__map map" style={{ height: '500px' }} />;
}

export default Map;
