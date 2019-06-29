import React, { useEffect } from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { loadMovies, loadMore, likeMovie } from '../../store/actions';
import styles from './styles';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/original';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const onLikeClicked = () => dispatch(likeMovie(movie.id));
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image
          source={{ uri: `${IMAGE_BASE}${movie.poster_path}` }}
          style={styles.poster}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.overview}>{movie.overview}</Text>
        </View>
        <TouchableOpacity
          style={styles.like}
          activeOpacity={0.7}
          onPress={onLikeClicked}
        >
          <Text>{movie.liked ? '👎' : '👍'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Footer = () => {
  const dispatch = useDispatch();
  const onLoadMoreClicked = () => dispatch(loadMore());
  return (
    <TouchableOpacity style={styles.loadMoreButton} onPress={onLoadMoreClicked}>
      <Text>Load More...</Text>
    </TouchableOpacity>
  );
};

const _renderItem = ({ item }) => <MovieCard movie={item} />;

const Movies = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, haveMore } = useSelector(state => ({
    movies: state.movies,
    isLoading: state.isLoading,
    haveMore: state.haveMore,
  }));

  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  return (
    <View>
      <StatusBar translucent={true} barStyle="dark-content" />
      <FlatList
        data={movies}
        renderItem={_renderItem}
        ListFooterComponent={haveMore && <Footer />}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.scrollContent}
      />
      {isLoading && (
        <ActivityIndicator
          style={styles.indicator}
          size="large"
          color="#FBD043"
        />
      )}
    </View>
  );
};

export default Movies;
