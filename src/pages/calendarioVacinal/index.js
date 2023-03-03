import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { List } from 'react-native-paper';

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
        return(
            <View>
                {items[activeTab].vacinas.map((item, i) => {
            return (
                <List.Section
                style={{ marginBottom: 10,  }}>
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
        )
    };

    

    return (
        <View styles={styles.container}>
            <StatusBar style="auto" />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
                <TouchableOpacity
                onPress={goBack}
                >
                    <Entypo name="chevron-thin-left" size={20} color="#573205" />
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

            <View style={{ alignItems: 'center' }}>
                    <Image source={require('./assets/icon.png')}
                        style={styles.icon} />
                </View>

            <ScrollView>
                               <View>
                               <View
            style={{
            paddingHorizontal: 40}}>
            
            </View>
                    {renderContent()}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', height: '100%'
    },

    flexRow: {
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap'
    },

    textTitle: {
        fontSize: 25, color: '#573205', textAlign: 'center', flexGrow: 1
    },

    icon: {
        width: 318, height: 290
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
        alignItems: "center",
        justifyContent: "center",
    },

    acordion: {
        backgroundColor: '#E2FFCC',
        borderRadius: 10,
        height: 50,
        marginLeft: '10%',
        marginRight: '10%',
        

    },
});

