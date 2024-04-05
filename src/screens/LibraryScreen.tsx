import * as React from 'react';
import {useRef} from 'react';
// UI
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
// Navigation
import {LibraryScreenProps} from '../navigation/root.tsx';
// Store
import {progressStore} from '../store/store.ts';
import {useStore} from '@nanostores/react';
// Rest
import mediaData from '../assets/data/data.json';

/**
 * ### LibraryScreen
 *
 * Screen for displaying books' content
 */
const LibraryScreen = ({route, navigation}: LibraryScreenProps) => {
  const progressStoreData = useStore(progressStore);
  const scrollRef = useRef<ScrollView>(null);
  const mediaIdFromProps = route.params.mediaId;
  const isContinue = route.params.isContinue;

  // Define if it should be scrolled to last viewed chapter
  const initialProgress =
    mediaIdFromProps === progressStoreData.mediaId && isContinue
      ? progressStoreData.progress
      : 0;

  const [currentProgress, setCurrentProgress] = React.useState(initialProgress);

  // Find the content
  const book = mediaData.find(media => media.id === mediaIdFromProps);
  let bookText = '';
  if (book && book.text) {
    bookText = book.text;
  }

  // Navigate to last position for redirect from ContinueSection
  React.useEffect(() => {
    if (scrollRef.current && mediaIdFromProps === progressStoreData.mediaId) {
      scrollRef.current.scrollTo({
        y: progressStoreData.progress,
        animated: true,
      });
    }
  }, [mediaIdFromProps, progressStoreData.mediaId, progressStoreData.progress]);

  // Save progress before return to Home screen
  React.useEffect(() => {
    return navigation.addListener('beforeRemove', () => {
      progressStore.set({mediaId: mediaIdFromProps, progress: currentProgress});
    });
  }, [currentProgress, mediaIdFromProps, navigation]);

  // Update locally progress reading
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setCurrentProgress(e.nativeEvent.contentOffset.y);
  };

  return (
    <ScrollView
      ref={scrollRef}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      style={styles.container}>
      <Text style={styles.text}>{bookText}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
});
export default LibraryScreen;
