import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { ImageBackground } from 'react-native';
import bgImage from './assets/back.png';

import infos from './assets/desenvolvimento.json'

export default function Desenvolvimento() {

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
            <View style={styles.content}>
                <View style={{ width: '100%', height: 50, borderRadius: 10, backgroundColor: '#EED3BA', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text>Altura:</Text>
                        <Text> {items[activeTab].height}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text>Peso:</Text>
                        <Text> {items[activeTab].weight}</Text>
                    </View>

                </View>

                <Text
                    style={{
                        margin: 20, textAlign: 'auto', fontSize: 17
                    }}
                >{items[activeTab].description}</Text>
                <View style={styles.flexRow}>
                    <Image source={require('./assets/brinc.png')}
                        style={styles.icon2} />
                    <View>
                        <Text>Sugestões de brincadeiras:</Text>
                        <Text>{items[activeTab].joke}</Text>
                    </View>

                </View>



                {/* <View style={styles.flexRow}>
                        <Image source={require('./assets/favo.png')}
                            style={styles.icon2} />
                        <View>
                            <Text>Marcos no desenvolvimento:</Text>
                            <Text>infos</Text>
                        </View>

                    </View> */}


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
                <Text style={styles.textTitle}>Desenvolvimento</Text>
            </View>


            <View>
                <ScrollView
                    horizontal={true}
                    horizontal showsHorizontalScrollIndicator={false}
                    style={{ paddingTop: 10 }}>
                    {renderTabs()}
                </ScrollView>       
            </View>

            <View>
                <ScrollView>
                {renderContent()}                    
                </ScrollView>
                </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
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
        width: 300, height: 155
    },

    icon2: {
        width: 50, height: 50
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
});

