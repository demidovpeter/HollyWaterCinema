import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CloseIcon = () => {
  return (
    <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
      <Path
        d="M1.75 1.75L9.75 9.75M17.75 17.75L9.75 9.75M9.75 9.75L1.75 17.75L17.75 1.75"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default CloseIcon;
