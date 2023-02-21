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

    containerInfos: {
        height: '60%',
        width: '100%',
        backgroundColor: '#DFDADA',
        paddingHorizontal: 30
    },

    itemAcordion: {
        backgroundColor: '#DDAE76',
    },

    iconsRod: {
        marginHorizontal: 45
    },

    textInfoTitle: {
        fontSize: 15,
        color: '#573205',
        width: '100%',
        fontWeight: 'bold',
        marginTop: 5
    },

    textInfo: {
        fontSize: 15,
        color: '#573205',
        width: '100%',
        textAlign: 'center'
    },

    card: {
        width: '46%',
        backgroundColor: '#E4F2EF',
        height: 110,
        borderRadius: 20,
        alignItems: 'center',
        margin: '2%',
        justifyContent: 'center',
    }
})