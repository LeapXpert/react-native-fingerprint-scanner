import { NativeModules } from 'react-native';

const { ReactNativeFingerprintScanner } = NativeModules;

export default ({ description = ' ', fallbackEnabled = true }) => {
  return new Promise((resolve, reject) => {
    ReactNativeFingerprintScanner.authenticate(description, fallbackEnabled, error => {
      if (error) {
        return reject(false)
      }

      return resolve(true);
    });
  });
}
