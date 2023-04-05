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
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: 15
    },

    textTitle: {
        fontSize: 20, marginStart: 15
    },

    icon: {
        width: 150, height: 150, marginBottom: 20
    }
    ,
    container2: {
        flex: 1,
    },
    tabContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    tab: {
        margin: 10,
        alignItems: 'center'
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
    textInfo: {
        fontSize: 15,
        marginTop: 10,
        width: '100%',
        textAlign: 'center'
    },
    font: { 
        fontSize: 15, 
        textAlign: 'center', 
        marginTop: 17, 
        marginBottom: 15, 
        marginHorizontal: 5 }
});

