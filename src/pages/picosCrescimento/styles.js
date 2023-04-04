import { StyleSheet } from 'react-native';

export default StyleSheet.create(
    {
        background: {
            flex: 1,
            resizeMode: 'cover',
            width: '100%',
            height: '100%',
        },

        container: {
            width: '100%', height: '100%'
        },

        textTitle: {
            fontSize: 20, marginStart: 15
        },

        flexRow: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center'
        },

        textHeader: { fontSize: 30, color: 'black', marginTop: 90, textAlign: 'center', flexGrow: 1, fontWeight: '600' },

        containerInfos: {
            width: '100%',
            paddingHorizontal: 30
        },

        itemAcordion: {
            backgroundColor: '#DDAE76',
            height: 50,

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
            backgroundColor: '#EED3BA',
            height: 110,
            borderRadius: 20,
            alignItems: 'center',
            margin: '2%',
            justifyContent: 'center',
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
        }
    }
)