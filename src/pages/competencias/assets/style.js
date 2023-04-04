import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
    },

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },


    container: {
        width: '100%',
        height: '100%'
    },

    textTitle: {
        fontSize: 20,
        marginStart: 15
    },

    scroll: {width: '100%' },

    icon: {
        width: 350,
        height: 230
    },

    containerInfo: { 
        width: '100%',
        paddingTop: 20,
        borderRadius: 20
    },

    textInfo: { 
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color: '#573205'
    },

    option: {
        backgroundColor: '#EED3BA',
        width: '90%',
        marginTop: 5,
        marginBottom: 20,
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

    textInfoTitle: {
        fontSize: 21,
        color: '#573205',
        width: '100%',
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center'

    },

    textInfo: {
        fontSize: 15,
        color: '#573205',
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 10,
        textAlign: 'center'
    }
})
