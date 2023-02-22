import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Janelas() {

    const [activeTab, setActiveTab] = useState(0);

    const handlePress = (tabIndex) => {
        setActiveTab(tabIndex);
    }

    const tabs = [
        "0",
        "1-2 ",
        "3-4",
        "5-6",
        "7-8",
        "9-12",

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
            <View style={styles.content}>
                <Text>
                    Dorme entre:
                </Text>
                <Text>
                    Quantidade de sonecas por dia:
                </Text>
                <Text>
                    Tempo das sonecas:
                </Text>
                <Text>
                    Tempo acordado entre sonecas:
                </Text>
                
            </View>
        );
    };


    return (
        <View styles={styles.container}>
            <StatusBar style="auto" />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
                <TouchableOpacity>
                    <Entypo name="chevron-thin-left" size={20} color="#573205" />
                </TouchableOpacity>
                <Text style={styles.textTitle}>Janelas do Sono</Text>
            </View>


            <View style={{ alignItems: 'center' }}>
                <Image source={require('./assets/icon.png')}
                    style={styles.icon} />
            </View>

            <View>
                <Text>
                    {renderTabs()}
                    </Text>
                    <Text style={{textAlign: 'center', fontSize: 12}}>meses</Text>
            </View>

            <ScrollView>
                <View>
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
        color: "#333",
    },
    activeTabText: {
        color: "#CF8B3B",
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

