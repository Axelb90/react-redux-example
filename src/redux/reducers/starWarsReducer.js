const INITIAL_STATE = {
  movies: [],
  loading: 0,
  characters: [],
  starships: [],
  vehicles: [],
};

const starWarsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default starWarsReducer;
