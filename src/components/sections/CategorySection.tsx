import React from 'react';
// UI
import Carousel from 'react-native-reanimated-carousel';
import {StyleSheet, View} from 'react-native';
import SmallCard from '../cards/SmallCard.tsx';
// Data
import mediaData from '../../assets/data/data.json';
// Rest
import {window} from '../../constants';
import remoteConfig from '@react-native-firebase/remote-config';

const width = window.width;

// Options for rendering carousel with small cards
const baseOptions = {
  vertical: false,
  width: width / 3,
  height: width / 2,
  style: {
    width: width,
  },
} as const;

interface CategorySectionProps {
  orderType: 'views' | 'rating';
}

/**
 * ### CategorySection
 *
 * Carousel component with TV show and books
 * It could be sorted by number of views or rating.
 *
 * Direction could be changed in settings, default is descending;
 *
 */
const CategorySection = ({orderType}: CategorySectionProps) => {
  const viewsSort = remoteConfig().getValue('viewsSort');
  const ratingSort = remoteConfig().getValue('ratingSort');

  // Sort media items
  let sortedMediaData = [];
  switch (orderType) {
    case 'rating':
      sortedMediaData = mediaData.sort((a, b) => {
        if (ratingSort.asString() === 'desc') {
          if (a.rating < b.rating) {
            return 1;
          }
          return -1;
        } else {
          if (a.rating > b.rating) {
            return 1;
          }
          return -1;
        }
      });
      break;
    case 'views':
      sortedMediaData = mediaData.sort((a, b) => {
        if (viewsSort.asString() === 'desc') {
          if (a.views < b.views) {
            return 1;
          }
          return -1;
        } else {
          if (a.views > b.views) {
            return 1;
          }
          return -1;
        }
      });
      break;
  }
  return (
    <View style={styles.container}>
      <Carousel
        {...baseOptions}
        data={sortedMediaData}
        scrollAnimationDuration={1000}
        renderItem={({item}) => <SmallCard {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CategorySection;
