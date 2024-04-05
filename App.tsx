import React from 'react';
import {View} from 'react-native';
import RootNavigator from './src/navigation/root.tsx';

function App(): React.JSX.Element {
  return (
    <React.Suspense fallback={null}>
      <View style={{flex: 1}}>
        <RootNavigator />
      </View>
    </React.Suspense>
  );
}
export default App;
