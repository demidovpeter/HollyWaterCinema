import React from 'react';
// UI
import {ScrollView, StyleSheet, View} from 'react-native';
import SectionTitle from '../components/sections/SectionTitle.tsx';
import BannerSection from '../components/sections/BannerSection.tsx';
import CategorySection from '../components/sections/CategorySection.tsx';
import ContinueSection from '../components/sections/ContinueSection.tsx';
// Data
import mediaData from '../assets/data/data.json';
// Store
import {useStore} from '@nanostores/react';
import {progressStore} from '../store/store.ts';
// Configs
import remoteConfig from '@react-native-firebase/remote-config';

const ViewsSection = () => (
  <View style={styles.sectionContainer}>
    <SectionTitle text={'Trending now'} />
    <CategorySection orderType="views" />
  </View>
);

const RatingSection = () => (
  <View style={styles.sectionContainer}>
    <SectionTitle text={'Top romance'} />
    <CategorySection orderType="rating" />
  </View>
);

interface IContinue {
  lastMediaItem: Media | undefined;
  isLastMediaIsVideo: boolean;
}

/**
 * ### Continue
 *
 * Section with banner, which display last visited media
 */
const Continue = ({lastMediaItem, isLastMediaIsVideo}: IContinue) => {
  return (
    <React.Fragment>
      {lastMediaItem ? (
        <View style={styles.sectionContainer}>
          <SectionTitle
            text={`Continue ${isLastMediaIsVideo ? 'watching' : 'reading'}`}
          />
          <ContinueSection {...lastMediaItem} />
        </View>
      ) : null}
    </React.Fragment>
  );
};

/**
 * ### Home Screen
 *
 * Initial screen with all media represented
 *
 */
const HomeScreen = () => {
  const progress = useStore(progressStore);

  // Find last seen media by ID
  const lastMediaItem = mediaData.find(
    mediaItem => mediaItem.id === progress.mediaId,
  );

  // Type of last viewed content for correct section label print
  const isLastMediaIsVideo = lastMediaItem?.contentType === 'video';

  // Read section's order from configs
  const initialSectionOrder = ['0', '1', '2', '3'];
  const [sectionOrder, setSectionOrder] = React.useState(initialSectionOrder);

  React.useEffect(() => {
    const newSectionOrder = remoteConfig()
      .getValue('sectionOrder')
      .asString()
      .split(',');

    console.log('sectionOrder ', sectionOrder);
    if (JSON.stringify(newSectionOrder) !== JSON.stringify(sectionOrder)) {
      setSectionOrder(newSectionOrder);
    }
  }, [sectionOrder]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      <SectionTitle text={'Home'} withIcon={true} />
      {sectionOrder.map(index => {
        switch (index) {
          case '0':
            return <BannerSection key={index} />;
          case '1':
            return (
              <Continue
                key={index}
                isLastMediaIsVideo={isLastMediaIsVideo}
                lastMediaItem={lastMediaItem}
              />
            );
          case '2':
            return <ViewsSection key={index} />;
          case '3':
            return <RatingSection key={index} />;
          default:
            return null;
        }
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    paddingHorizontal: 6,
  },
  sectionContainer: {
    marginVertical: 10,
  },
});

export default HomeScreen;
