import React, { useState } from 'react';
import { ImageBackground, Text, View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { List } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import styles from './assets/styles'
import bgImage from './assets/back.png';
import reflexos from './assets/reflexos.json'

export default function Reflexos() {

  const navigation = useNavigation();

  function goBack() {
    navigation.goBack()
  }

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const items = (
    reflexos
  )

  return (
    <View style={styles.container}>
       <ImageBackground source={bgImage} style={styles.background}>

      <StatusBar style="auto" />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, marginBottom: 10 }}>
        <TouchableOpacity
          style={{ marginLeft: 10}}
          onPress={goBack}>
          <Entypo name="chevron-thin-left" size={15} />
        </TouchableOpacity>

        <Text style={styles.textTitle}>Reflexos</Text>
      </View>

      <ScrollView
        style={{width: '100%' }}
      >
        
        <View style={{ width: '100%', paddingTop: 20, borderRadius: 20 }} >
          <Text style={{ fontSize: 16, textAlign: 'center' }}>Os reflexos primitivos são respostas automáticas e estereotipadas a um determinado estímulo externo.</Text>
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
      </ImageBackground>

    </View >
  );
}


