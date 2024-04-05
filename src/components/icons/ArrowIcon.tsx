import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M8 4L16 12L8 20"
        stroke="#F5F5F5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ArrowIcon;
