import Reactotron from 'reactotron-react-native';

Reactotron.configure({ name: 'Ignite App' })
  .useReactNative()
  .connect();

Reactotron.clear();
console.disableYellowBox = true;
console.tron = Reactotron;
