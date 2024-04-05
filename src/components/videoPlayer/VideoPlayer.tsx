import React, {useRef} from 'react';
// UI
import {StyleSheet, View} from 'react-native';
import VideoTopBar from './VideoTopBar.tsx';
// @ts-ignore
import {VideoRef} from 'react-native-video';
import Video from 'react-native-video-controls';
// Navigation
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
// Store
import {progressStore} from '../../store/store.ts';

interface IVideoPlayer {
  mediaId: Media['id'];
  videoLink: Media['videoLink'];
  title: Media['title'];
  /** Last interrupted time in seconds */
  progress: number;
}

/**
 * ### VideoPlayer
 *
 * Component for playback video content
 */
const VideoPlayer = ({mediaId, videoLink, title, progress}: IVideoPlayer) => {
  const videoRef = useRef<VideoRef>(null);

  const [currentProgress, setCurrentProgress] = React.useState(progress);

  // Seek to the latest video chapter
  const handleOnSeek = () => {
    if (progress) {
      videoRef.current.player.ref.seek(progress);
    }
  };

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  // Save progress before return to Home screen
  React.useEffect(() => {
    return navigation.addListener('beforeRemove', () => {
      progressStore.set({mediaId, progress: currentProgress});
    });
  }, [currentProgress, mediaId, navigation]);

  return (
    <View style={styles.container}>
      <Video
        source={{uri: videoLink, type: 'm3u8'}}
        ref={videoRef}
        onError={() => console.error('Error in video player')}
        style={styles.backgroundVideo}
        resizeMode="stretch"
        fullscreenOrientation="portrait"
        tapAnywhereToPause={true}
        disableBack={true}
        disableFullscreen={true}
        disableVolume={true}
        onLoad={handleOnSeek}
        onProgress={data => setCurrentProgress(data.currentTime)}
      />
      <VideoTopBar onClose={() => navigation.goBack()} title={title} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoPlayer;
