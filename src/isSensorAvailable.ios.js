import { NativeModules } from "react-native";
import createError from "./createError";

const { ReactNativeFingerprintScanner } = NativeModules;

export default () => {
  return new Promise((resolve, reject) => {
    ReactNativeFingerprintScanner.isSensorAvailable((error, biometryType) => {
      if (error) {
        resolve("")
        return;
      };
      resolve(biometryType);
    });
  });
};
