import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
    marginTop: 30
  },
  styleImg: {
    alignSelf: 'center',
    marginTop: -10
  },
  containerDataPicker: {
    position: 'absolute',
    width: '100%',
    left: 0,
    opacity: 0
  },
  customTitleText: {
    color: '#4078c0',
    paddingLeft: 25
  },
  customTitleSwitch: {
    color: '#4078c0',
    alignItems: 'center'
  },
  customContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  textError: {
    color: '#bd2c00',
    textAlign: 'center',
    paddingTop: 5
  }
});
