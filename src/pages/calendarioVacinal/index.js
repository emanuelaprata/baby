import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function Calendario() {

    const navigation = useNavigation();
    
    function goBack() {
        navigation.goBack()
    }

    const [activeTab, setActiveTab] = useState(0);

    const handlePress = (tabIndex) => {
        setActiveTab(tabIndex);
    }

    const tabs = [
        "1 mês",
        "2 meses",
        "3 meses",
        "4 meses",
        "5 meses",
        "6 meses",
        "7 meses",
        "8 meses",
        "9 meses",
        "10 meses",
        "11 meses",
        "12 meses",
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
                    {tabs[activeTab]}
                </Text>
            </View>
        );
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

