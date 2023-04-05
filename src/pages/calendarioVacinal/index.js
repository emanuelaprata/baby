import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { ImageBackground, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { List } from 'react-native-paper';

import bgImage from './assets/back.png';
import styles from './style'
import calendario from './assets/calendario.json'


export default function Calendario() {

    const navigation = useNavigation();
    function goBack() {navigation.goBack()}

    const [expanded, setExpanded] = React.useState(true);
    const handlePressContent = () => setExpanded(!expanded);
    const [activeTab, setActiveTab] = useState(0);
    const handlePress = (tabIndex) => {setActiveTab(tabIndex);}
    const items = calendario

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
                        >{item.name} </Text>
                    </View>
                </TouchableHighlight>
            );
        })
    };

    const renderContent = () => {
        return (
            <ScrollView>
            <View style={styles.containerRender}>
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

            <View style={styles.header}>
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

            <ScrollView>
                <View>
                    {renderContent()}
                </View>
            </ScrollView>
        </View>
        </ImageBackground>

    )
}
