import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import getLogo from '../../utils/getLogo.ts';
import React from 'react';
import getFutureReleaseDate from '../../utils/getFutureReleaseDate.ts';
import LockIcon from '../icons/LockIcon.tsx';
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';

const SmallCard = (item: Media) => {
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
      <React.Fragment>
        <ImageBackground
          source={getLogo(item.logoId)}
          resizeMode="stretch"
          blurRadius={releaseStatus ? 60 : undefined}
          style={styles.imageContainer}>
          {releaseStatus ? (
            <View style={styles.lockArea}>
              <View style={styles.lockContainer} />
              <View style={styles.lock}>
                <LockIcon />
              </View>
            </View>
          ) : null}
        </ImageBackground>
        <View style={styles.titleContainer}>
          {releaseStatus ? (
            <Text style={styles.announcement}>{`Coming ${releaseStatus}`}</Text>
          ) : null}
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </React.Fragment>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 7,
  },
  imageContainer: {
    flex: 3,
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockArea: {
    position: 'relative',
  },
  lockContainer: {
    backgroundColor: 'white',
    opacity: 0.2,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lock: {
    position: 'absolute',
    top: 14,
    left: 14,
  },
  titleContainer: {
    flex: 1,
    paddingTop: 5,
  },
  title: {
    color: '#EBEDF0',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    paddingRight: 16,
  },
  announcement: {
    color: '#00BFE5',
    fontWeight: '800',
    fontSize: 11,
    lineHeight: 14,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export default SmallCard;
