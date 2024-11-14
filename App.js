import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Image, View, Platform, Button, Alert, SafeAreaView } from 'react-native';

export default function App() {
  const [showNewImage, setShowNewImage] = useState(false);
  const [isSadImage, setIsSadImage] = useState(false);


  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.headerText}>
        Hej Examinator
      </Text>

      <Text style={styles.smallText}>
        Detta är min lilla app som ger användaren filmtips för familjer
      </Text>

      <Image
        style={styles.image}
        source={showNewImage
          ? isSadImage
            ? require('./assets/sadness1.png')
            : require('./assets/joy.png')
          : require('./assets/joyandsadness.png')
        }
      />

      <View style={styles.tryckHarButton}>
        <Button
          title="Tryck här!"

          onPress={() => Alert.alert("Wohoo du tryckte på knappen!", "Blir jag godkänd?", [
            {
              text: "nej!",
              onPress: () => {
                console.log("nej!");
                setShowNewImage(true);
                setIsSadImage(true); // Visa den sadness bilden
              },
            },
            {
              text: "Självfallet",
              onPress: () => {
                console.log("Självfallet");
                setShowNewImage(true);
                setIsSadImage(false); // Visa joy
              },
            },
          ])}
        />
      </View>


      <View style={styles.filmtipsButton}>
        <Button
          title="Se dagens filmtips"
          onPress={() => Alert.alert('Dagens filmtips:', '- Inside Out \n- The Incredibles\n- Baby Boss\n')}
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
  headerText: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 80,
    color: 'purple'
  },
  smallText: {
    fontSize: 12,
    fontWeight: '40',
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 10,
  },
  filmtipsButton: {
    position: 'absolute',
    top: 60,
    left: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  tryckHarButton: {
    backgroundColor: 'white',
    borderRadius: 10,
  }
});
