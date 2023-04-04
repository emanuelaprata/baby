import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import bgImage from './assets/back.png';
import styles from './styles'
import infos from './assets/desenvolvimento.json'

export default function Desenvolvimento() {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    const items = (
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
                <View>
                    <Image source={{ uri: items[activeTab].frames }}
                        style={styles.banner} />

                    <View style={styles.containerInfo}>
                        <View style={styles.flexRow}>
                            <Text>Altura:</Text>
                            <Text> {items[activeTab].height}</Text>
                        </View>
                        <View style={styles.flexRow}>
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
                            style={styles.icon} />
                        <View style={{ width: '60%' }}>
                            <Text style={{ fontWeight: 'bold' }}>Sugestões de brincadeiras:</Text>
                            <Text>{items[activeTab].joke}</Text>
                        </View>
                    </View>
                </View>
        );
    };




    return (
        <ImageBackground source={bgImage} style={styles.background}>
                <StatusBar style="auto" />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, marginBottom: 10 }}>
                    <TouchableOpacity
                        style={{ marginLeft: 10 }}
                        onPress={goBack}>
                        <Entypo name="chevron-thin-left" size={15} />
                    </TouchableOpacity>
                    <Text style={styles.textTitle}>Desenvolvimento</Text>
                </View>

                <ScrollView
                    horizontal={true}
                    horizontal showsHorizontalScrollIndicator={false}
                    style={{marginBottom:10}}
                    >
                    {renderTabs()}
                </ScrollView>

                <ScrollView>
                    <View style={{ width: '100%' }}>
                         {renderContent()}
                    <Text style={styles.textAlert}>
                        Cada bebê se desenvolve em seu próprio ritmo, essas são apenas diretrizes gerais. Se você tiver preocupações sobre o desenvolvimento do seu bebê, fale com o pediatra responsável.
                    </Text>
                    </View>
                   
                </ScrollView>

        </ImageBackground>
    )
}

