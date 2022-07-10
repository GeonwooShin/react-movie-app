const initialState = {
  popularMovie: {},
  topRatedMovie: {},
  upcomingMovie: {},
  loading: true,
};

function movieReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        popularMovie: payload.popularMovies,
        topRatedMovie: payload.topRatedMovies,
        upcomingMovie: payload.upcomingMovies,
        loading: false,
      };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}

export default movieReducer;
