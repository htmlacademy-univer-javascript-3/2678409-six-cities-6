import { useState } from 'react';
import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[];
  block?: string;
  className?: string;
};

function OffersList({ offers, block = 'cities', className = 'cities__places-list places__list tabs__content' }: OffersListProps): JSX.Element {
  // activeOfferId понадобится для подсветки маркера на карте (следующее задание)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_activeOfferId, setActiveOfferId] = useState<number | null>(null);

  return (
    <div className={className}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          block={block}
          onHover={setActiveOfferId}
        />
      ))}
    </div>
  );
}

export default OffersList;
