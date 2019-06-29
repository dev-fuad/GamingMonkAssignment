import {
  LOAD_MOVIES,
  LOAD_CACHED,
  LOAD_MORE_MOVIES,
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
        ...store,
        movies: [...state.movies, ...state.cached],
        cached: [],
      };
    case LOAD_MORE_MOVIES:
      return {
        movies: [...state.movies, ...action.payload.topTen],
        cached: action.payload.otherTen,
        page: {
          ...store.page,
          index: action.payload.page,
        },
        isLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
