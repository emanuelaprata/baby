import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { ImageBackground, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import bgImage from './assets/back.png';
import styles from './styles'
import infos from './assets/janelasDoSono.json'


export default function Janelas() {

    const items = ( infos )
    const navigation = useNavigation();
    function goBack() {
        navigation.goBack()
    }

    // TabView ########

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
                <View>
                   
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
        <ImageBackground source={bgImage} style={styles.background}>

        
        <View styles={styles.container}>
            <StatusBar style="auto" />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                <TouchableOpacity
                style={{marginLeft: 10}}
                    onPress={goBack}>
                    <Entypo name="chevron-thin-left" size={15}  />
                </TouchableOpacity>

                <Text style={styles.textTitle}>Janelas do Sono</Text>
            </View>


            <View style={{ alignItems: 'center' }}>
                <Image source={require('./assets/icon.png')}
                    style={styles.icon} />
            </View>

            <View
                style={{
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
        </ImageBackground>
    )
}
