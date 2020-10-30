import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import AppContainer from './src/components/AppContainer';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <View style={styles.container}>
            <AppContainer />
          </View>
        </Provider>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b8b8c',
  },
});
