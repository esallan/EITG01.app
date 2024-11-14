import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Image, View, Platform, Button, Alert, SafeAreaView } from 'react-native';

export default function App() {
  const [displayedImage, setDisplayedImage] = useState('joyAndSadness');


  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.header1Text}>
        Välkommen till Filmtips!
      </Text>

      <Text style={styles.header2Text}>
        Hej Examinator
      </Text>

      <Text style={styles.smallText}>
        Detta är min lilla app som ger användaren filmtips för familjer
      </Text>

      <View style={styles.filmtipsButton}>
        <Button
          title="Se dagens filmtips"
          onPress={() => {
            setDisplayedImage('joyAndSadness')
            Alert.alert('Dagens filmtips:', '- Inside Out \n- The Incredibles\n- Baby Boss\n')
          }
          }
        />
      </View>

      {displayedImage === 'joyAndSadness' && (
        <Image
          style={styles.image}
          source={require('./assets/joyandsadness.png')}
        />
      )}
      {displayedImage === 'joy' && (
        <Image
          style={styles.image}
          source={require('./assets/joy.png')}
        />
      )}
      {displayedImage === 'sadness' && (
        <Image
          style={styles.image}
          source={require('./assets/sadness1.png')}
        />
      )}

      <View style={styles.tryckHarButton}>
        <Button
          title="Tryck här för att ge betyg!"

          onPress={() => Alert.alert("Wohoo du tryckte på knappen!", "Blir jag godkänd?", [
            {
              text: "Nej!",
              onPress: () => {
                setDisplayedImage('sadness');
              },
            },
            {
              text: "Självfallet",
              onPress: () => {
                setDisplayedImage('joy');
              },
            },
          ])}
        />
      </View>
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
  header1Text: {
    fontSize: 30,
    fontWeight: '600',
    color: 'purple'
  },
  header2Text: {
    fontSize: 15,
    fontWeight: '600',
    color: 'brown'
  },
  smallText: {
    fontSize: 12,
    fontWeight: '40',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '60%',
    objectFit: 'scale-down',
    borderRadius: 10,
  },
  filmtipsButton: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  tryckHarButton: {
    backgroundColor: 'white',
    borderRadius: 10,
  }
});
