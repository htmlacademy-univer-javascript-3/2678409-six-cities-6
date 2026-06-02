export type Location = {
  latitude: number;
  longitude: number;
};

export type Offer = {
  id: number;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  rating: number;
  isPremium: boolean;
  image: string;
  isFavorite: boolean;
  description: string;
  images: string[];
  bedrooms: number;
  maxAdults: number;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
    isPro: boolean;
  };
  city: {
    name: string;
    location: Location;
  };
  location: Location;
};
