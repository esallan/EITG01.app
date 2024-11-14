import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'; // Importerar useState-hooken från React, används för att hantera state i funktionella komponenter.
import { StyleSheet, Text, Image, Platform, Button, Alert, TouchableHighlight, SafeAreaView } from 'react-native'; // Importerar nödvändiga komponenter från React Native för att bygga appens layout och funktionalitet.

export default function App() {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  return (
    <SafeAreaView style={styles.container}> {/*kan passa in en array med, med olika styles */}

      <Text style={{
        fontSize: 40,
        fontWeight: 900,
        gap: '2',
      }}>
        Hej Examinator
      </Text>

      <Text style={{
        gap: '20',
        fontSize: 20,
      }}>Detta är min lilla app, testa tryck på bilden</Text>

      <TouchableHighlight
        onPress={() => setIsImageEnlarged(!isImageEnlarged)}
      >

        <Image
          style={{
            borderRadius: 10,
            width: isImageEnlarged ? 300 : 200,
            height: isImageEnlarged ? 340 : 300,
          }}
          source={{
            uri: "https://picsum.photos/seed/picsum/200/300",
          }} />
      </TouchableHighlight>

      <Button
        title="Press me!"
        color="blue"
        onPress={() => Alert.alert("Wohoo du tryckte på knappen!", "Blir jag godkänd?", [
          { text: "Ja!", onPress: () => console.log("Ja!") },
          { text: "Självfallet", onPress: () => console.log("Självfallet") }
        ])} />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2%',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeigt : 0,
  },
});
