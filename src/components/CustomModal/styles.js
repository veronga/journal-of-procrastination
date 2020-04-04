import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(191, 189, 187, 0.4)',
    justifyContent: 'center'
  },
  containerModal: {
    width: '80%',
    height: '40%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: '#767C96',
    shadowRadius: 4,
    shadowOpacity: 0.25
  },
  iconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cancellation: {
    alignSelf: 'center',
    bottom: -50,
    position: 'absolute',
    zIndex: 1
  }
});
