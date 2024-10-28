import { NativeModules } from 'react-native';

const { ReactNativeFingerprintScanner } = NativeModules;

export default () => {
  return new Promise((resolve, reject) => {
    ReactNativeFingerprintScanner.isSensorAvailable()
      .then((biometryType) => resolve(biometryType))
      .catch(error => reject(""));
  });
}
