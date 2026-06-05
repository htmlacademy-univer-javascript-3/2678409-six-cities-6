import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffers } from './action';
import { Offer } from '../types/offer';
import { DEFAULT_CITY } from '../const';

type State = {
  city: string;
  offers: Offer[];
};

const initialState: State = {
  city: DEFAULT_CITY,
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
export type { State };
