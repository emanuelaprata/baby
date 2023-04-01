import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { ImageBackground } from 'react-native';
import bgImage from './assets/back.png';

import infos from './assets/marcos.json'

export default function Marcos() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    const [items, setItems] = React.useState(
        infos
    )

    const [activeTab, setActiveTab] = useState(0);

    const handlePress = (tabIndex) => {
        setActiveTab(tabIndex);
    }

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
                            {item.idade}
                        </Text>
                    </View>
                </TouchableHighlight>
            );
        });
    };

    const renderContent = () => {
        return (
            <ScrollView
           >
                
                <View style={{ alignItems: 'center'}}>
                <Image source={require('./assets/favo.png')}
                            style={styles.icon} />
                        <View>
                           
                            {items[activeTab].marcos.map((marco, i) => {
                                return (
                                    <Text style={{textAlign: 'left', margin: 5, fontSize: 15, marginTop: 10}}>
                                        {i+1 + '. ' + marco}
                                    </Text>
                                )
                            })}
                        </View>
                    </View>
            </ScrollView>
        );
    };




    return (
        <ImageBackground source={bgImage} style={styles.background}>
        <View styles={styles.container}>
            <StatusBar style="auto" />

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={goBack}>
                    <Entypo name="chevron-thin-left" size={15} />
                </TouchableOpacity>
                <Text style={styles.textTitle}>Marcos no Desenvolvimento</Text>
            </View>


                <ScrollView
                    horizontal={true}
                    horizontal showsHorizontalScrollIndicator={false}
                    style={{ paddingHorizontal: 10}}>
                    {renderTabs()}
                </ScrollView> 

                    <View>
                    <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 17, marginBottom: 15, marginHorizontal: 5 }}>São habilidades ou comportamentos que a maioria das crianças adquire em uma determinada faixa etária.</Text>

                    </View>
                    <View style={{marginTop: 30}}>
                {renderContent()}
                </View>

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
});

