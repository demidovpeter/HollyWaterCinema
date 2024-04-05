import * as React from 'react';
import Svg, {Path, Circle, Defs, Rect, ClipPath} from 'react-native-svg';

const SearchIcon = () => {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <Circle
        cx="10.9853"
        cy="10.9873"
        r="7"
        transform="rotate(-45 10.9853 10.9873)"
        stroke="#F5F5F5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15.1405 16.7219C14.7871 16.2743 14.8247 15.6331 15.2279 15.2299C15.6312 14.8267 16.2724 14.7891 16.7199 15.1425L21.0828 18.5868C21.9184 19.2465 21.9911 20.4875 21.2383 21.2403C20.4856 21.9931 19.2445 21.9204 18.5848 21.0848L15.1405 16.7219Z"
        fill="#F5F5F5"
      />
      <Defs>
        <ClipPath id="clip0_547_1013">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SearchIcon;
