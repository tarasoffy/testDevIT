import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
  
const GUIDE_LINE_BASE_WIDTH = 375;
  
const w = (value) => {
    const width =
        typeof value === 'number' ? (value * 100) / GUIDE_LINE_BASE_WIDTH : value;
    return wp(width);
};
  
export { w };