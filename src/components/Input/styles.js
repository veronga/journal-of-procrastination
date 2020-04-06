import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '90%',
    height: 40,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E1ED',
    marginTop: 20,
    borderRadius: 20,
    shadowColor: '#767C96',
    shadowRadius: 4,
    shadowOpacity: 0.25
  },
  iconStyle: {
    marginLeft: 25,
    width: 25,
    fontSize: 25,
    alignSelf: 'center'
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingLeft: 25
  }
});
