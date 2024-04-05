import React from 'react';
// UI
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ArrowIcon from '../icons/ArrowIcon.tsx';
// Navigation
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
// Utils
import getLogo from '../../utils/getLogo.ts';

/**
 * ### ContinueSection
 *
 * UI component with access to the last viewed media.
 * Only this way user get access to the last seen part of media.
 * If redirect invoked throw Category or Banner section, progress will be 0
 *
 */
const ContinueSection = (item: Media) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  // Navigate to media
  const handleViewPress = () => {
    const targetScreen = item.text ? 'LibraryScreen' : 'CinemaScreen';
    navigation.navigate(targetScreen, {mediaId: item.id, isContinue: true});
  };

  return (
    <TouchableOpacity onPress={handleViewPress} style={styles.container}>
      <View>
        <ImageBackground
          source={getLogo(item.logoId)}
          resizeMode="stretch"
          style={styles.imageContainer}
        />
      </View>
      <View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>
      </View>
      <View style={styles.icon}>
        <ArrowIcon />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    width: '100%',
    height: 68,
    backgroundColor: '#3598D0',
    borderRadius: 12,
    padding: 8,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    width: 44,
  },
  infoContainer: {
    paddingHorizontal: 12,
    height: '100%',
    justifyContent: 'center',
    gap: 4,
  },
  title: {
    color: '#EBEDF0',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
  },
  author: {
    color: '#E1E3E6',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
  icon: {
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
    top: 8,
    right: 20,
  },
});
export default ContinueSection;
