import React from 'react';
// UI
import Carousel from 'react-native-reanimated-carousel';
import {StyleSheet, View} from 'react-native';
import LargeCard from '../cards/LargeCard.tsx';
// Rest
import {window} from '../../constants';
import mediaData from '../../assets/data/data.json';

const width = window.width;

// Styles for large cards carousel
const baseOptions = {
  vertical: false,
  width: width * 0.9,
  height: width * 0.66,
} as const;

/**
 * ### VideoSection
 *
 * Carousel component with TV show
 */
const BannerSection = () => {
  return (
    <View style={styles.container}>
      <Carousel
        {...baseOptions}
        data={mediaData}
        scrollAnimationDuration={1000}
        style={styles.carousel}
        renderItem={({item}) => <LargeCard {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carousel: {
    width: '100%',
  },
});

export default BannerSection;
