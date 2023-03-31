import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { List } from 'react-native-paper';
import { ImageBackground } from 'react-native';
import bgImage from './assets/back.png';

import calendario from './assets/calendario.json'


export default function Calendario() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    const [expanded, setExpanded] = React.useState(true);

    const handlePressContent = () => setExpanded(!expanded);

    const [activeTab, setActiveTab] = useState(0);

    const handlePress = (tabIndex) => {
        setActiveTab(tabIndex);
    }

    const [items, setItems] = React.useState(
        calendario
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
        })
    };

    const renderContent = () => {
        return (
            <ScrollView>
            <View style={{ height: '50%',
        width: '100%',
        padding: 30}}>
                {items[activeTab].vacinas.map((item, i) => {
                    return (
                        <List.Section
                            style={{ marginBottom: 10}}>
                            <List.Accordion
                                title={item.name}
                                style={styles.acordion}
                                onPress={handlePressContent}>
                                <Text style={styles.textInfo}>{item.illness}</Text>
                            </List.Accordion>
                        </List.Section>
                    )
                })}
            </View>
            </ScrollView>
        )
    };



    return (
        <ImageBackground source={bgImage} style={styles.background}>

        <View styles={styles.container}>

            <StatusBar style="auto" />

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 30, paddingBottom: 10}}>
                <TouchableOpacity
                    onPress={goBack}
                    style={{marginLeft: 10}}
                >
                    <Entypo name="chevron-thin-left" size={15} />
                </TouchableOpacity>
                <Text style={styles.textTitle}>Calendário Vacinal</Text>
            </View>


            <View style={styles.tabContainer}>
                <ScrollView
                    horizontal={true}
                    horizontal showsHorizontalScrollIndicator={false}
                    style={{ paddingTop: 10 }}>
                    {renderTabs()}
                </ScrollView>
            </View> 

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./assets/icon.png')}
                    style={styles.icon} />
            </View>
           
            <View style={{ alignItems: 'center' }}>

            </View>

            <ScrollView>
                <View>
                    {renderContent()}
                </View>
            </ScrollView>
        </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
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
        backgroundColor: '#EDCB9C',
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

