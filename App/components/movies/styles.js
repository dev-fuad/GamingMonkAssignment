import { StyleSheet } from 'react-native';
import { statusBarHeight, chinHeight, vw } from '../../utilities/Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: statusBarHeight + 10,
    paddingBottom: chinHeight || 20,
  },
  card: {
    width: vw(100),
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: vw(90),

    borderRadius: 15,
    overflow: 'hidden',
  },
  poster: {
    width: vw(30),
    height: vw(45),
    borderRadius: 15,
  },
  like: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#0005',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#FFF8',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 16,
    color: '#333',
  },
  overview: {
    fontSize: 13,
    color: '#BBB',
  },
  loadMoreButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#FBD043',
    borderRadius: 10,
    marginRight: 20,
    marginBottom: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});

export default styles;
