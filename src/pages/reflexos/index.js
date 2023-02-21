import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Octicons, Feather, AntDesign, Entypo } from '@expo/vector-icons';
import { List } from 'react-native-paper';
import reflexos from './assets/reflexos.json'
import { useState } from 'react';




export default function Reflexos() {


  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const [items, setItems] = useState(
    reflexos
  )

  return (
    <View style={styles.container}>

      <View style={styles.flexRow}>
        <TouchableOpacity style={{ marginLeft: 20 }}
        >
          <Entypo name="chevron-thin-left" size={20} color="#573205" />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, color: '#573205', marginTop: 90, textAlign: 'center', flexGrow: 1 }}>Reflexos Primitivos</Text>

      </View>

      <View style={styles.containerOptions}>

        <ScrollView
          style={{ backgroundColor: '#EBEAEA', width: '100%' }}
        >
          <View style={{ alignItems: 'center' }}>
            <Image source={require('./assets/icon2.png')}
              style={{
                width: 230, height: 230
              }} />

          </View>
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

      </View>

    </View >
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
    backgroundColor: '#EBEAEA',
    alignItems: 'center',
  },

   containerOptions: {
    width: '100%',
    alignItems: 'center',
  },

  option: {
    backgroundColor: '#F5F5F5',
    width: '90%',
    marginTop: 20,
    borderRadius: 20,
    shadowColor: '#AFAFAF',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
  },

  textOptions: {
    fontSize: 15,
    marginTop: 10,
    color: '#573205',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center'
  },

  textInfoTitle: {
    fontSize: 15,
    color: '#573205',
    width: '100%',
    fontWeight: 'bold',
    marginHorizontal: 14,
    marginTop: 5
  },

  textInfo: {
    fontSize: 15,
    color: '#573205',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 10
  },

  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },


  itemAcordion: {
    backgroundColor: '#E4C299',
    shadowColor: '#blaCK',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
  }
})


