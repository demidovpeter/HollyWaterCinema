import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CloseIcon from '../icons/CloseIcon.tsx';
import {useIsFocused} from '@react-navigation/native';

interface VideoTopBarProps {
  title: string;
  onClose: () => void;
}
/**
 * ### VideoTopBar
 *
 * Component contains Close button and movie title
 */
const VideoTopBar = (props: VideoTopBarProps) => {
  const isFocused = useIsFocused();

  // Visibility of video title
  const [titleVisible, setTitleVisible] = React.useState(true);

  // Hide video name
  React.useEffect(() => {
    if (isFocused) {
      setTimeout(() => setTitleVisible(false), 5 * 1000);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.onClose()}
        style={styles.closeButton}>
        <CloseIcon />
      </TouchableOpacity>
      {titleVisible ? <Text style={styles.title}>{props.title}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  closeButton: {
    flex: 1,
  },
  title: {
    flex: 2,
    color: '#F5F5F5',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -1,
  },
});
export default VideoTopBar;
