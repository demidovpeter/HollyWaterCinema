import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchIcon from '../icons/SearchIcon.tsx';

interface SectionTitleI {
  text: string;
  withIcon?: boolean;
}
/**
 * ### SectionTitle
 *
 * Label for each section with carousel
 */
const SectionTitle = ({text, withIcon}: SectionTitleI) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {withIcon ? (
        <View style={styles.icon}>
          <SearchIcon />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: 'white',
    paddingHorizontal: 6,
    alignSelf: 'center',
  },
  icon: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
});
export default SectionTitle;
