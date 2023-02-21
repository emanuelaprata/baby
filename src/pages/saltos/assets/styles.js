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
        backgroundColor: '#DFDADA',
        alignItems: 'center',
        justifyContent: 'center'
    },

    header: {
        height: '43%',
        width: '100%',
        backgroundColor: '#DFDADA',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerInfos: {
        height: '50%',
        width: '100%',
        backgroundColor: '#DFDADA',
        padding: 30,
    },

    itemAcordion: {
        backgroundColor: '#DDAE76',
    },

    textInfoTitle: {
        fontSize: 15,
        color: '#573205',
        width: '100%',
        fontWeight: 'bold',
        marginTop: 5
    },

    textInfo: {
        fontSize: 12,
        color: '#573205',
        width: '100%',
    },

    textInfo2: {
        fontSize: 15,
        color: '#573205',
        width: '100%',
        margin: 10,
        textAlign: 'center'
    },

    card: {
        width: '46%',
        backgroundColor: '#EBBDFF',
        height: 110,
        borderRadius: 20,
        alignItems: 'center',
        margin: '2%',
        justifyContent: 'center',
        
    }
})