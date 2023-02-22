import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    
    
      container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#EBEAEA',
        alignItems: 'center',
      },
    
       containerOptions: {
        width: '100%',
        alignItems: 'center',
      },
    
      option: {
        backgroundColor: '#F5F5F5',
        width: '90%',
        marginTop: 20,
        borderRadius: 20,
        shadowColor: '#AFAFAF',
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
      },
    
      textOptions: {
        fontSize: 15,
        marginTop: 10,
        color: '#573205',
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center'
      },
    
      textInfoTitle: {
        fontSize: 15,
        color: '#573205',
        width: '100%',
        fontWeight: 'bold',
        marginHorizontal: 14,
        marginTop: 5
      },
    
      textInfo: {
        fontSize: 15,
        color: '#573205',
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 10
      },
    
      image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
      },
    
    
      itemAcordion: {
        backgroundColor: '#E4C299',
        shadowColor: '#blaCK',
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
      }
})