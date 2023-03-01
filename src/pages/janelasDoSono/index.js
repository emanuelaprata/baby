import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { List } from 'react-native-paper';


export default function Janelas() {

    // Acordeon #######
    const [expandedList, setExpandedList] = React.useState(true);

    const handlePressList = () => setExpandedList(!expandedList);

    // TabView ########

    const [activeTab, setActiveTab] = useState(0);

    const handlePress = (tabIndex) => {
        setActiveTab(tabIndex);
    }

    const tabs = [
        "0 meses",
        "1-2 meses",
        "3-4 meses",
        "5-6 meses",
        "7-8 meses",
        "9-12 meses",

    ];

    const renderTabs = () => {
        return tabs.map((tab, i) => {
            return (
                <TouchableHighlight
                    key={i}
                    onPress={() => setActiveTab(i)}
                    underlayColor="transparent"
                >
                    <View
                        style={[
                            styles.tab,
                            activeTab === i ? styles.activeTab : null,
                        ]}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                activeTab === i ? styles.activeTabText : null,
                            ]}
                        >
                            {tab}
                        </Text>
                    </View>
                </TouchableHighlight>
            );
        });
    };

    const renderContent = () => {
        return (

            <ScrollView>
                    <View style={styles.flexRow}>
                        <Text>
                            Dorme entre:
                        </Text>
                        <Text>2-3</Text>
                    </View>

                    <View style={styles.flexRow}>

                        <Text>
                            Quantidade de sonecas por dia:
                        </Text>
                        <Text>2</Text>
                    </View>

                    <View style={styles.flexRow}>

                        <Text>
                            Tempo das sonecas:
                        </Text>
                        <Text>2-3</Text>
                    </View>

                    <View style={styles.flexRow}>

                        <Text>
                            Tempo acordado entre sonecas:
                        </Text>
                        <Text>2</Text>
                    </View>

            </ScrollView>



        );
    };


    return (
        <View styles={styles.container}>
            <StatusBar style="auto" />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
                <TouchableOpacity>
                    <Entypo name="chevron-thin-left" size={20} color="#573205" />
                </TouchableOpacity>
                <Text style={styles.textTitle}>Janelas do Sono</Text>
            </View>


            <View style={{ alignItems: 'center' }}>
                <Image source={require('./assets/icon.png')}
                    style={styles.icon} />
            </View>

            <List.Accordion
                title="O que é?"

                onPress={handlePress}>
                <Text style={styles.textInfo}>É o período de tempo ideal para que ele durma e descanse, levando em consideração sua idade e necessidades individuais. Manter um horário regular de sono e acordar pode ajudar a garantir que o bebê esteja descansado e alerta durante o dia e dormindo bem durante a noite.</Text>
            </List.Accordion>

            <ScrollView
                horizontal={true}
                horizontal showsHorizontalScrollIndicator={false}
            >
                <View>

                    <Text>
                        {renderTabs()}
                    </Text>
                </View>
            </ScrollView>

            <ScrollView>
                {renderContent()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', height: '100%'
    },

    flexRow: {
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', marginHorizontal: 20
    },

    textTitle: {
        fontSize: 25, color: '#573205', textAlign: 'center', flexGrow: 1
    },

    icon: {
        width: 318, height: 290, marginTop: 30
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
    activeTab: {
        borderColor: '#CF8B3B',
        borderBottomWidth: 2
    },
    tabText: {
        fontSize: 20,
        color: "#333",
    },
    activeTabText: {
        color: "#CF8B3B",
    },
    content: {
        flex: 1,
        justifyContent: "center",
    },

    textInfo: {
        fontSize: 15,
        color: '#573205',
        width: '100%',
        textAlign: 'center'
    },

    itemAcordion: {
        backgroundColor: '#DDAE76',
        marginHorizontal: 20,
        marginVertical: 10
    },
});

