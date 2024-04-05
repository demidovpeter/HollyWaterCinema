import React from 'react';
// UI
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// Navigation
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
// Utils
import getFutureReleaseDate from '../../utils/getFutureReleaseDate.ts';
import getLogo from '../../utils/getLogo.ts';

/**
 * ### LargeCard
 *
 * Single UI component of Banner section.
 * Future released media have no diff with the rest of media, like they are in Category section
 */
const LargeCard = (item: Media) => {
  const releaseStatus = getFutureReleaseDate(item.premierDate);

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handleViewPress = () => {
    if (!releaseStatus) {
      const targetScreen = item.text ? 'LibraryScreen' : 'CinemaScreen';
      navigation.navigate(targetScreen, {mediaId: item.id});
    }
  };

  return (
    <TouchableOpacity onPress={handleViewPress} style={styles.container}>
      <ImageBackground
        source={getLogo(item.logoId)}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.genreContainer}>
          <Text style={styles.genre}>{item.genre}</Text>
        </View>
        <View style={styles.bottomInnerContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '2.5%',
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  genreContainer: {
    position: 'absolute',
    top: 8,
    left: 16,
    borderRadius: 4,
    padding: 6,
    backgroundColor: 'black',
  },
  genre: {
    color: '#F5F5F5',
    fontWeight: '700',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
  bottomInnerContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  title: {
    color: '#F5F5F5',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
    marginBottom: 5,
  },
  author: {
    color: '#C4C8CC',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
  },
});
export default LargeCard;
