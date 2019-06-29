const BaseURL = 'https://api.themoviedb.org/3/';
const endPoint = 'movie/popular';
const API_KEY = '24123752fadbef66e14f2da79d5d9333';

export const fetchMovies = (page = 1) => {
  const url = `${BaseURL}${endPoint}?api_key=${API_KEY}&language=en-US&page=${page}`;
  console.log('calling...\n', url);
  return fetch(url).then(res => res.json());
};
