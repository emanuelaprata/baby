import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {

    const [items, setItems] = React.useState([
        { title: 'Opção 01', image: 'icon', path: 'Caminho' }
    ])


    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text>Aqui vai o cabeçalho</Text>
            </View>

            <View style={styles.containerOptions}>
                <View style={styles.options}>
                    <Text>Opção 01</Text>
                </View>

                <View style={styles.options}>
                    <Text>Opção 02</Text>
                </View>

                <View style={styles.options}>
                    <Text>Opção 03</Text>
                </View>

                <View style={styles.options}>
                    <Text>Opção 04</Text>
                </View>

                <View style={styles.options}>
                    <Text>Opção 05</Text>
                </View>

                <View style={styles.options}>
                    <Text>Opção 06</Text>
                </View>

            </View>

            <View style={{ height: '7%', width: '100%', borderTopWidth: 1, borderTopColor: '#04CEFF' }}>
                <View style={{ height: '100%', width: '100%', borderTopWidth: 1, borderTopColor: '#04CEFF', marginTop: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <Text> Aqui vai o roda pé hihih</Text>
                    <Image/>
                    <Image/>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    container: { 
        display: 'flex', 
        width: '100%', 
        height: '100%', 
        backgroundColor: 'white', 
        alignItems: 'center' 
    },

    header: {
        backgroundColor: '#04CEFF',
        width: '100%', height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },

    containerOptions: {
        height: '63%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: '20%'
    },

    options: {
        backgroundColor: 'white',
        width: '30%',
        height: '15%',
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#04CEFF',
        borderWidth: 1,
    }
})