import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { List } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import styles from './assets/styles'
import { ImageBackground } from 'react-native';
import bgImage from './assets/back.png';
import reflexos from './assets/reflexos.json'

export default function Reflexos() {

  const navigation = useNavigation();

  function goBack() {
    navigation.goBack()
  }

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const [items, setItems] = useState(
    reflexos
  )

  return (
    <ImageBackground source={bgImage} style={{ flex: 1,
      resizeMode: 'cover',
      width: '100%',
      height: '100%'}}>
    <View style={styles.container}>

      <StatusBar style="auto" />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={goBack}>
          <Entypo name="chevron-thin-left" size={15} />
        </TouchableOpacity>

        <Text style={styles.textTitle}>Reflexos</Text>
      </View>

      <ScrollView
        style={{ backgroundColor: '#EBEAEA', width: '100%' }}
      >
        
        <View style={{ width: '100%', backgroundColor: '#EBEAEA', paddingTop: 20, borderRadius: 20 }} >
          <Text style={{ fontSize: 16, textAlign: 'center', margin: 10, color: '#573205' }}>Os reflexos primitivos são respostas automáticas e estereotipadas a um determinado estímulo externo.</Text>
        </View>


        <View style={{ alignItems: 'center' }}>
          {items.map((item, i) => {
            return (
              <View style={styles.option}>
                <Image
                  style={styles.image}
                  source={{ uri: `${item.image}` }} />

                <View style={{ justifyContent: 'center' }}>

                  <List.Accordion
                    title={item.name}
                    style={styles.itemAcordion}
                    onPress={handlePress}>
                    <Text
                      style={styles.textInfoTitle}>
                      Comportamento:
                    </Text>
                    <Text style={styles.textInfo}>
                      {item.descrição}
                    </Text>
                    <Text
                      style={styles.textInfoTitle}>
                      Estimulo:
                    </Text>
                    <Text style={styles.textInfo}>
                      {item.estimulo}
                    </Text>
                  </List.Accordion>
                </View>
              </View>
            )
          })}
        </View>

      </ScrollView>

    </View >
    </ImageBackground>
  );
}


