import {
  LOAD_MOVIES,
  LOAD_CACHED,
  LOAD_MORE_MOVIES,
  LIKE_MOVIE,
  SET_LOADING,
} from './types';
import { fetchMovies } from '../providers/api';
import store from './index';

const loadMoviesAction = payload => ({
  type: LOAD_MOVIES,
  payload,
});

const loadCachedAction = () => ({
  type: LOAD_CACHED,
});

const loadMoreAction = payload => ({
  type: LOAD_MORE_MOVIES,
  payload,
});

const likeMovieAction = payload => ({
  type: LIKE_MOVIE,
  payload,
});

const setLoadingAction = payload => ({
  type: SET_LOADING,
  payload,
});

const _fetchMovies = async (page, dispatch) => {
  try {
    dispatch(setLoadingAction(true));
    const moviesResponse = await fetchMovies(page);
    return {
      topTen: moviesResponse.results.slice(0, 10),
      otherTen: moviesResponse.results.slice(10),
      page: moviesResponse.page,
      totalPages: moviesResponse.total_pages,
    };
  } catch (error) {
    console.log('Errorred: ', error);
    return null;
  }
};

export const loadMovies = () => async dispatch => {
  const result = await _fetchMovies(1, dispatch);
  dispatch(loadMoviesAction(result));
};

export const loadMore = () => async dispatch => {
  const cachedMovies = store.getState().cached;
  if (cachedMovies.length === 0) {
    // Fetch More Movies
    const currentPage = store.getState().page.index;
    const result = await _fetchMovies(currentPage + 1, dispatch);
    dispatch(loadMoreAction(result));
  } else {
    dispatch(loadCachedAction());
  }
};

export const likeMovie = id => dispatch => {
  dispatch(likeMovieAction({ id }));
};
