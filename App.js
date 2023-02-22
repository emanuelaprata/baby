import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './src/pages/menu';
import Reflexos from './src/pages/reflexos';
import Rotas from './routes';
import PicoCrescimento from './src/pages/picosCrescimento';
import Saltos from './src/pages/saltos';
import SaltosDetail from './src/pages/saltosDetail';
import Competencias from './src/pages/competencias';
import Calendario from './src/pages/calendarioVacinal';


export default function App() {
  return (
    <View style={styles.container}>
      <Calendario/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
