import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { List } from 'react-native-paper';


export default function Janelas() {

    const navigation = useNavigation();
    
    function goBack() {
        navigation.goBack()
    }

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
                <TouchableOpacity
                 onPress={goBack}>
                    <Entypo name="chevron-thin-left" size={20} color="#573205" />
                </TouchableOpacity>
                <Text style={styles.textTitle}>Janelas do Sono</Text>
            </View>


            <View style={{ alignItems: 'center' }}>
                <Image source={require('./assets/icon.png')}
                    style={styles.icon} />
            </View>

            <View
            style={{backgroundColor: '#F4F3F3',
            paddingHorizontal: 40}}>
            <List.Section >
                        <List.Accordion
                            title="O que é?"
                            style={styles.itemAcordion}
                            onPress={handlePress}>
                            <Text style={styles.textInfo}>Refere-se ao período de tempo durante o qual um bebê está pronto para dormir, geralmente indicado por sinais de cansaço ou sonolência. É importante que os pais observem os sinais de cansaço e aprendam a identificar a janela de sono do bebê para ajudá-lo a dormir adequadamente. </Text>
                        </List.Accordion>
                    </List.Section>
            </View>

            

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
        color: '#573205',
        width: '100%',
        textAlign: 'center'
    },

    itemAcordion: {
        backgroundColor: '#DDAE76',
    },
});

