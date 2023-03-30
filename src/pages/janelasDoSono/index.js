import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import infos from './assets/janelasDoSono.json'

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

    const [items, setItems] = React.useState(
        infos
    )

    const renderTabs = () => {
        return items.map((item, i) => {
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
                            {item.name}
                        </Text>
                    </View>
                </TouchableHighlight>
            );
        });
    };

    const renderContent = () => {
        return (
            <ScrollView>
                <View>
                    <View style={styles.flexRow}>
                        <Text style={styles.textTitleInfo}>
                            Janela:
                        </Text>
                        <Text style={styles.textInfo2}> {items[activeTab].janela_sono}</Text>
                    </View>

                    <View style={styles.flexRow}>

                        <Text style={styles.textTitleInfo}>
                            Quantidade de sonecas por dia:
                        </Text>
                        <Text style={styles.textInfo2}> {items[activeTab].quantidade_sonecas}</Text>
                    </View>

                    <View style={styles.flexRow}>

                        <Text style={styles.textTitleInfo}>
                            Tempo das sonecas:
                        </Text>
                        <Text style={styles.textInfo2}> {items[activeTab].tempo_sonecas}</Text>
                    </View>

                    <View style={styles.flexRow}>

                        <Text style={styles.textTitleInfo}>
                            Tempo acordado entre sonecas:
                        </Text>
                        <Text style={styles.textInfo2}> {items[activeTab].tempo_acordado}</Text>
                    </View>
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
                style={{
                    backgroundColor: '#F4F3F3',
                    paddingHorizontal: 30
                }}>
                
                <Text style={styles.textInfo}>Refere-se ao período de tempo durante o qual um bebê está pronto para dormir, geralmente indicado por sinais de cansaço ou sonolência. </Text>

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

    textTitleInfo: {
        marginTop: 5,
        fontSize: 17,
        color: '#573205',
        fontWeight: 'bold'
    },

    textInfo2: {
        fontSize: 16,
        marginTop: 5,
        color: '#573205',
    },

    itemAcordion: {
        backgroundColor: '#DDAE76',
    }
});

