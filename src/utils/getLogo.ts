import Logo1 from '../assets/img/img_1.png';
import Logo2 from '../assets/img/img_2.png';
import Logo3 from '../assets/img/img_3.png';
import Logo4 from '../assets/img/img_4.png';

/**
 * ### getLogo
 *
 * Get logo based on `logoId` of the media item prop
 */
const getLogo = (logoId: number) => {
  switch (logoId) {
    case 2:
      return Logo2;
    case 3:
      return Logo3;
    case 4:
      return Logo4;
    default:
      return Logo1;
  }
};

export default getLogo;
