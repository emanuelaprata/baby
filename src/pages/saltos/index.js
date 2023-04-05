import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Alert, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import bgImage from './assets/back.png';
import infos from './assets/saltos.json'
import styles from './styles'

export default function Saltos() {
     const navigation = useNavigation();

    function goBack() {
        navigation.goBack()
    }

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    const saltos = (infos)


    return (
        <ImageBackground source={bgImage} style={styles.background}>

        <View style={styles.container}>
        <StatusBar style="auto" />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                <TouchableOpacity
                style={{marginLeft: 10}}
                    onPress={goBack}>
                    <Entypo name="chevron-thin-left" size={15}  />
                </TouchableOpacity>

                <Text style={styles.textTitle}>Saltos de Desenvolvimento</Text>
            </View>


            <ScrollView style={{ width: '100%' }}>
                <View style={styles.containerInfos}>
                        <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 30, marginBottom: 15 }}>
                        Os saltos de desenvolvimento estão relacionados com novas habilidades que o bebê conquista. Quando isso ocorre, o bebê experimenta muitas sensações e emoções novas, o que pode acabar alterando a rotina, alterando o sono o deixando agitado, relutante para suas sonecas e irritado ao fim do dia, ele pode ficar mais choroso, mais carente. Nesse momento o bebê precisa de muito carinho, atenção e contato físico, para que ele se sinta seguro e amparado.
                        </Text>

                    <View style={styles.flexRow}>

                        {saltos.map((item, i) => {
                            
                            return (
                                <TouchableOpacity style={styles.card} onPress={() => {
                                    Alert.alert(
                                        'Sobre o ' + item.salto + ':',
                                        item.desenvolvimento,
                                        [
                                            { text: 'Ok'},
                                          ],
                                        { cancelable: false }
                                    )
                                }}>
                                
                                <AntDesign name="rocket1" size={34} color="black" />
                                    <Text style={styles.textInfoTitle}>{item.salto}</Text>
                                    <Text style={styles.textInfo}>{item.idade}</Text>
                            </TouchableOpacity>
                            )
                        })}
                    </View>

                    <TouchableOpacity
                     style={{
                        backgroundColor: '#EED3BA',
                        height: 110,
                        borderRadius: 20,
                        alignItems: 'center',
                        margin: '2%',
                        justifyContent: 'center',
                        shadowColor: '#5C5C5C',
                                textAlign: 'center',
                                shadowOffset: {
                                    width: 0,
                                    height: 4
                                },
                                shadowRadius: 5,
                                shadowOpacity: 1.0,
                                elevation: 3
                    }}
                    onPress={() => {
                                    Alert.alert(
                                        'Sobre o 11° salto:',
                                        'A criança começa a demonstrar mais independência e pode fazer algumas coisas sozinha, como se vestir e comer com colher. Ela também pode começar a mostrar medo de algumas coisas, como o escuro ou animais. A fala continua a se desenvolver e a criança pode formar frases mais complexas.',
                                        [
                                            { text: 'Ok'},
                                          ],
                                          {
                                            cancelable: false
                                            },
                                            
                                          
                                    )
                                }}> 
                    <AntDesign name="rocket1" size={34} color="black" />
                            <Text style={styles.textInfoTitle}>11° Salto</Text>
                            <Text style={styles.textInfo}>1 ano e 6 meses</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>


        </View >
        </ImageBackground>
    );
}