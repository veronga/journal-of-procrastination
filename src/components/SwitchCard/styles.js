import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: 100,
    alignSelf: 'center',
    backgroundColor: '#E6E1ED',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    shadowColor: '#767C96',
    shadowRadius: 4,
    shadowOpacity: 0.25
  },
  styleText: {
    fontSize: 17,
    fontWeight: '500',
    paddingLeft: 15,
    color: '#5470A1',
    lineHeight: 20
  },
  subStyleText: {
    color: '#767C96',
    paddingLeft: 15,
    fontSize: 12,
    marginTop: 5,
  }
});
