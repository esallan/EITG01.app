import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'; // Importerar useState-hooken från React, används för att hantera state i funktionella komponenter.
import { StyleSheet, Text, Image, View, Button, Alert, Platform, TouchableHighlight, SafeAreaView } from 'react-native'; // Importerar nödvändiga komponenter från React Native för att bygga appens layout och funktionalitet.



export default function App() {




  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 40,
        fontWeight: 600,
      }}>
        Hej Examinator
      </Text>

      <TouchableHighlight
        onPress={() => console.log("Imaged tapped")}
      >
        <Image
          style={{
            borderRadius: 16
          }}
          source={{
            width: 200,
            height: 300,
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

    </View>
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
    gap: '10%',
  },
});
