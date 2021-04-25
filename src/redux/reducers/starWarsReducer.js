import { FETCH_CHARACTERS } from "../actions/types";

const INITIAL_STATE = {
  movies: [],
  loading: 0,
  characters: [],
  starships: [],
  vehicles: [],
};

const starWarsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    default:
      return state;
  }
};

export default starWarsReducer;
