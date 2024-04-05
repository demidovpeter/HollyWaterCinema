import React from 'react';
//UI
import {StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import VideoPlayer from '../components/videoPlayer/VideoPlayer.tsx';
// Navigation
import {CinemaScreenProps} from '../navigation/root.tsx';
// Store
import {useStore} from '@nanostores/react';
import {progressStore} from '../store/store.ts';
// Rest
import {window} from '../constants';
import mediaData from '../assets/data/data.json';

const width = window.width;
const height = window.height - 20;

/**
 * ### CinemaScreen
 *
 * Screen for display video content
 */
const CinemaScreen = ({route}: CinemaScreenProps) => {
  const progressStoreData = useStore(progressStore);

  const mediaIdFromProps = route.params.mediaId;
  const isContinue = route.params.isContinue;

  // Define if video should be seeked to last viewed time
  const initialProgress =
    mediaIdFromProps === progressStoreData.mediaId && isContinue
      ? progressStoreData.progress
      : 0;

  // Filter video content
  const movieContent = mediaData.filter(
    mediaItem => mediaItem.contentType === 'video',
  );

  // Find index of current video in all video media
  const mediaIndex = movieContent.findIndex(
    mediaItem => mediaItem.id === mediaIdFromProps,
  );

  const [currentVideo, setCurrentVideo] = React.useState(mediaIndex);

  return (
    <View style={styles.container}>
      <Carousel
        loop
        style={styles.carousel}
        vertical={true}
        width={width}
        height={height}
        data={movieContent}
        defaultIndex={mediaIndex}
        onSnapToItem={index => setCurrentVideo(index)}
        renderItem={({item, index}) => {
          // Prevent to render non focused video
          if (index !== currentVideo) {
            return <View />;
          }
          return (
            <VideoPlayer
              mediaId={item.id}
              videoLink={item.videoLink}
              title={item.title}
              progress={initialProgress}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  carousel: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default CinemaScreen;
