import { Dimensions, Platform, PixelRatio } from 'react-native';

export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// based on iphone X's scale
const wscale = screenWidth / 375;
const hscale = screenHeight / 812;

export function normalize(size, based = 'width') {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}
