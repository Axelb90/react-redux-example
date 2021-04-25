const INITIAL_STATE = {
  movies: [],
  loading: 0,
  characters: [],
};

const starWarsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default starWarsReducer;
