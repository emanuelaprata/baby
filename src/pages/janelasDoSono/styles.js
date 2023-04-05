import { StyleSheet } from 'react-native';

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

    flexRow: {
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', marginHorizontal: 20
    },

    textTitle: {
        fontSize: 20, marginStart: 15
    },

    icon: {
        width: 300, height: 290, marginTop: 0
    }
    ,
    container2: {
        flex: 1,
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    tab: {
        margin: 10,
        alignItems: 'center'
    },
    // activeTab: {
    //     borderColor: '#CF8B3B',
    //     borderBottomWidth: 2
    // },
    tabText: {
        fontSize: 20,
        color: "#C6B198",
    },
    activeTabText: {
        color: "#573205",
    },
    content: {
        flex: 1,
        justifyContent: "center",
    },

    textInfo: {
        fontSize: 15,
        marginTop: 10,
        width: '100%',
        textAlign: 'center'
    },

    textTitleInfo: {
        marginTop: 5,
        fontSize: 17,
        fontWeight: 'bold'
    },

    textInfo2: {
        fontSize: 16,
        marginTop: 5,
    
    },


});

