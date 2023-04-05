import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
      },
    container: {
        width: '100%', height: '100%'

    },

    containerRender: { 
    height: '50%',
    width: '100%',
    padding: 30
    },

    header: { 
    flexDirection: 'row',
     alignItems: 'center', 
     paddingTop: 30, 
     paddingBottom: 10
    },

    flexRow: {
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap'
    },

    textTitle: {
        fontSize: 20, marginStart: 15
    },


    icon: {
        width: 230, height: 200, marginVertical: 20
    }
    ,
    container2: {
        flex: 1,
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    tab: {
        marginHorizontal: 10,
        alignItems: 'center'
    },
    activeTab: {
        borderColor: '#46DEDE',
        borderBottomWidth: 0
    },
    tabText: {
        fontSize: 20,
        color: "#C6B198",
    },
    activeTabText: {
        color: "#573205",
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    acordion: {
        backgroundColor: '#DFC4A7',
        height: 50,
        paddingHorizontal: 30,
    },
    textInfoTitle: {
        fontSize: 15,
        width: '100%',
        fontWeight: 'bold',
        marginTop: 5,
        flexWrap: 1
    },

    textInfo: {
        fontSize: 15,
        width: '100%',
        textAlign: 'center',
        padding: 10
    },
});
