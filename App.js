import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Image, Platform, Button, Alert, SafeAreaView } from 'react-native';

export default function App() {
  const [showNewImage, setShowNewImage] = useState(false);
  const [isSadImage, setIsSadImage] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.headerText}>
        Hej Examinator
      </Text>

      <Text style={styles.smallText}>
        Detta är min lilla app
      </Text>

      <Image
        style={styles.image}
        source={showNewImage
          ? isSadImage
            ? require('./assets/sadness1.png') // Visar bilden för "nej!"
            : require('./assets/joy.png') // Visar bilden för "Självfallet"
          : require('./assets/joyandsadness.png') // Standardbild
        }
      />

      <Button
        title="Tryck här!"
        color="black"
        onPress={() => Alert.alert("Wohoo du tryckte på knappen!", "Blir jag godkänd?", [
          {
            text: "nej!",
            onPress: () => {
              console.log("nej!");
              setShowNewImage(true);
              setIsSadImage(true); // Visa den ledsna bilden
            },
          },
          {
            text: "Självfallet",
            onPress: () => {
              console.log("Självfallet");
              setShowNewImage(true);
              setIsSadImage(false); // Visa glada-bild
            },
          },
        ])}
      />
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerText: {
    fontSize: 40,
    fontWeight: '600',
    marginBottom: 0,
  },
  smallText: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 0,
  },
  image: {
    width: 400,  // Fixerad bredd
    height: 400, // Fixerad höjd
    borderRadius: 10,
  },
});
