import { Offer } from '../types/offer';

export const mockOffers: Offer[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    rating: 4.8,
    isPremium: true,
    image: 'img/apartment-01.jpg',
    isFavorite: false,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg'
    ],
    bedrooms: 3,
    maxAdults: 4,
    amenities: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cable TV', 'Fridge'],
    host: {
      name: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true
    },
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: 2,
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    rating: 4.0,
    isPremium: false,
    image: 'img/room.jpg',
    isFavorite: true,
    description: 'A cozy room in the heart of the city with wooden finishing and stone details.',
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg'
    ],
    bedrooms: 1,
    maxAdults: 2,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen'],
    host: {
      name: 'Max',
      avatar: 'img/avatar-max.jpg',
      isPro: false
    },
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    rating: 4.5,
    isPremium: false,
    image: 'img/apartment-02.jpg',
    isFavorite: false,
    description: 'Beautiful apartment with stunning views of the Prinsengracht canal.',
    images: [
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg'
    ],
    bedrooms: 2,
    maxAdults: 3,
    amenities: ['Wi-Fi', 'Heating', 'Kitchen', 'Dishwasher'],
    host: {
      name: 'Isabella',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true
    },
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    rating: 5.0,
    isPremium: true,
    image: 'img/apartment-03.jpg',
    isFavorite: false,
    description: 'Premium apartment with a big comfortable bed and all modern amenities.',
    images: [
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/room.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg'
    ],
    bedrooms: 2,
    maxAdults: 4,
    amenities: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Kitchen', 'Dishwasher', 'Cable TV'],
    host: {
      name: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true
    },
    city: {
      name: 'Amsterdam'
    }
  }
];
