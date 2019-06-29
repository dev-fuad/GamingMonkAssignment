import {
  LOAD_MOVIES,
  LOAD_CACHED,
  LOAD_MORE_MOVIES,
  LIKE_MOVIE,
  SET_LOADING,
} from './types';

const InitialState = {
  movies: [],
  cached: [],
  page: {
    index: 1,
    total: 1,
  },
  isLoading: false,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        movies: action.payload.topTen,
        cached: action.payload.otherTen,
        page: {
          index: 1,
          total: action.payload.totalPages,
        },
        isLoading: false,
      };
    case LOAD_CACHED:
      return {
        ...state,
        movies: [...state.movies, ...state.cached],
        cached: [],
      };
    case LOAD_MORE_MOVIES:
      return {
        movies: [...state.movies, ...action.payload.topTen],
        cached: action.payload.otherTen,
        page: {
          ...state.page,
          index: action.payload.page,
        },
        isLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case LIKE_MOVIE:
      return {
        ...state,
        movies: state.movies.map(movie => ({
          ...movie,
          liked: action.payload.id === movie.id ? !movie.liked : movie.liked,
        })),
      };

    default:
      return state;
  }
};
