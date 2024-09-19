import { NativeModules } from 'react-native';
import createError from './createError';

const { ReactNativeFingerprintScanner } = NativeModules;

export default ({ description = ' ', fallbackEnabled = true }) => {
  return new Promise((resolve, reject) => {
    ReactNativeFingerprintScanner.authenticate(description, fallbackEnabled, error => {
      if (error) {
        return resolve(false)
      }

      return resolve(true);
    });
  });
}
