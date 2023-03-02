import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, Entypo } from '@expo/vector-icons';

import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image } from 'react-native';

export default function SaltosDetail({route}) {

    const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }
    
    // console.log(route.params)

    const item = route.params.item
    console.log(item)

    return (

        <View style={styles.container}>

<View style={styles.flexRow}>
                <TouchableOpacity style={{ marginLeft: 20, flexGrow: 1 }}
                    onPress={goBack}
                >
                    <Entypo name="chevron-thin-left" size={20} color="#573205" />
                </TouchableOpacity>
                <Text style={{ fontSize: 25, color: '#573205', marginTop: 100, textAlign: 'center', flexGrow: 1 }}>{item.name}</Text>

            </View>

            <View>
                
                <Text>{item.details}</Text>
            </View> 
        </View> 
    );
}

const styles = StyleSheet.create({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },

    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#DFDADA',
        alignItems: 'center',
        justifyContent: 'center'
    },

    header: {
        height: '43%',
        width: '100%',
        backgroundColor: '#DFDADA',
        justifyContent: 'center',
        alignItems: 'center',
    }
    
});