import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { ImageBackground, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import bgImage from './assets/back.png';
import styles from './styles'
import infos from './assets/marcos.json'

export default function Marcos() {

    const navigation = useNavigation();
    function goBack() {navigation.goBack()}
    const items =(infos)
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

                    <Text style={{ textAlign: 'center', color: '#A4A2A2', margin: 10 }}>
                    É importante lembrar que os marcos de desenvolvimento são apenas orientações gerais e que cada criança se desenvolve em seu próprio ritmo. Se você tiver dúvidas ou preocupações sobre o desenvolvimento de uma criança, é sempre melhor consultar um profissional de saúde ou educação.
                    </Text>
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
                    <Text style={styles.font}>São habilidades ou comportamentos que a maioria das crianças adquire em uma determinada faixa etária.</Text>

                    </View>
                    <View style={{marginTop: 30}}>
                {renderContent()}
                </View>

        </View>
        </ImageBackground>
    )
}

