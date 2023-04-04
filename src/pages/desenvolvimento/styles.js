import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    

    containerInfo: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#EED3BA',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    banner: {
        width: '100%',
        height: 150,
        marginTop: 10,
    },

    textTitle: {
        fontSize: 20, marginStart: 15
    },

    icon: {
        width: 100, height: 100
    }
    ,

    tabContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    tab: {
        marginHorizontal: 10,
        alignItems: 'center',
    },
    activeTab: {

    },
    tabText: {
        fontSize: 18,
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

    textAlert: {
        textAlign: 'center',
        color: '#A4A2A2',
        margin: 10
    }
});

