import Reactotron from "reactotron-react-native";
// import { reactotronRedux as reduxPlugin } from "reactotron-redux";
// import sagaPlugin from "reactotron-redux-saga";

Reactotron.configure({ name: "Ignite App" })
  .useReactNative()
  // .use(reduxPlugin())
  // .use(sagaPlugin())
  .connect();

// Let's clear Reactotron on every time we load the app
Reactotron.clear();
console.disableYellowBox = true;

// Totally hacky, but this allows you to not both importing reactotron-react-native
// on eve file.  Tryhis is just DEV mode, so no big deal.
console.tron = Reactotron;
