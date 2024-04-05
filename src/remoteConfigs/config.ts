import remoteConfig from '@react-native-firebase/remote-config';
import defaultConfig from './defaultConfigs.json';

/**
 * ### setRemoteConfig
 *
 * Setup default settings, fetch and activate remote one
 */
const setRemoteConfig = () => {
  remoteConfig()
    .setDefaults(defaultConfig)
    .then(() => remoteConfig().fetchAndActivate())
    .then(fetchedRemotely => {
      if (fetchedRemotely) {
        console.log('Configs were retrieved from the backend and activated.');
      } else {
        console.log(
          'No configs were fetched from the backend, and the local configs were already activated',
        );
      }
    });
};

export default setRemoteConfig;
