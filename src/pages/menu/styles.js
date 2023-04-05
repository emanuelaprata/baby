import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
      },

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    containerOptions: {
        marginTop: -20,
        height: '100%',
        width: '100%',
    },

    option: {
        backgroundColor: '#FAF0E7',
        width: 347,
        height: 92,
        borderRadius: 10,
        marginTop: 30,
        marginHorizontal: '2%',
        justifyContent: 'center',
        shadowColor: '#5C5C5C',
        textAlign: 'center',
        shadowOffset: {
            width: 0,
            height: 4
        },
        width: '45%',
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3
    },


    textOptions: {
        fontSize: 16,
        textAlign: 'center'
    }
})