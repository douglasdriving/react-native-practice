import { View, Text, Button, StyleSheet, ScrollView, Image, TextInput } from "react-native";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import droneImg from '../assets/Images/drone.png'
import flightImg from '../assets/Images/flight.png'
import shipImg from '../assets/Images/ship.png'
import streetImg from '../assets/Images/street.jpeg'
import { useNavigation } from "@react-navigation/native";


export const ViewExample = (props) => {
  return (
    <View style={[styles.container, styles.mid]}>
      <Text>This is an example of some views!</Text>
      <View style={exampleStyles.box}>
        <View style={exampleStyles.nestedBox}>
          <View style={exampleStyles.nestedBox}></View>
          <View style={exampleStyles.nestedBox}></View>
          <View style={exampleStyles.nestedBox}></View>
        </View>
        <View style={exampleStyles.nestedBox}></View>
        <View style={exampleStyles.nestedBox}></View>
      </View>
    </View>
  )
}

export const TextExample = (props) => {
  return (
    <View style={[styles.container, styles.mid]}>
      <Text>This is an example of some text!</Text>
      <Text style={{ color: 'red', fontSize: 40 }}>
        Big red text
      </Text>
      <Text>
        <Text style={{ color: 'red', fontSize: 15 }}>Text </Text>
        <Text style={{ color: 'green', fontSize: 40 }}>with </Text>
        <Text style={{ color: 'blue', fontSize: 10 }}>different </Text>
        <Text style={{ color: 'yellow', backgroundColor: 'black', fontSize: 20 }}>styles.</Text>
      </Text>
    </View>
  )
}

export const ButtonExample = (props) => {

  const [pressCount, setPressCount] = useState(0);

  const pages = props.route.params.pages;
  const nav = useNavigation();
  const goRandom = () => {
    const page = pages[Math.floor(Math.random() * pages.length)]
    nav.navigate(page)
  }

  return (
    <View style={[styles.container, styles.mid, { padding: 100, justifyContent: "space-evenly" }]}>
      <Text style={{ textAlign: 'center' }}>This is an example of some buttons!</Text>
      <Text style={{ fontSize: 50 }}>{pressCount}</Text>
      <Button title="Increase" color='black' disabled={false} onPress={() => setPressCount(prev => prev + 1)}></Button>
      <Button title="Double" color='green' disabled={false} onPress={() => setPressCount(prev => prev * 2)}></Button>
      <Button title="Reset" color='red' disabled={false} onPress={() => setPressCount(0)}></Button>
      <Button title="Go to a random tab" color='blue' disabled={false} onPress={goRandom}></Button>
    </View>
  )
}

export const ScrollViewExample = () => {
  return (
    <View style={[styles.container, styles.mid, { padding: 50, justifyContent: "space-evenly" }]}>
      <Text style={{ textAlign: 'center' }}>This is an example of a ScrollView!</Text>
      <ScrollView style={exampleStyles.scrollBox}>
        <View style={exampleStyles.scrollItem} />
        <View style={exampleStyles.scrollItem} />
        <View style={exampleStyles.scrollItem} />
        <View style={exampleStyles.scrollItem} />
        <View style={exampleStyles.scrollItem} />
        <View style={exampleStyles.scrollItem} />
        <View style={exampleStyles.scrollItem} />
        <View style={exampleStyles.scrollItem} />
        <View style={exampleStyles.scrollItem} />
      </ScrollView>
    </View>
  )
}

export const ImageExample = () => {
  return (
    <View style={[styles.container, styles.mid, { padding: 50, justifyContent: "space-evenly" }]}>
      <Text style={{ textAlign: 'center' }}>This is an example of some Images!</Text>
      <View style={exampleStyles.imageContainer}>
        <Image source={droneImg} style={exampleStyles.image} />
        <Image source={flightImg} style={exampleStyles.image} />
      </View>
      <View style={exampleStyles.imageContainer}>
        <Image source={shipImg} style={exampleStyles.image} />
        <Image source={streetImg} style={exampleStyles.image} />
      </View>
    </View>
  )
}

export const TextInputExample = () => {

  const [text, setText] = useState('');

  return (
    <View style={[styles.container, styles.mid, { padding: 50, justifyContent: "space-evenly" }]}>
      <Text style={{ textAlign: 'center' }}>This is an example of some TextInput!</Text>
      <TextInput style={exampleStyles.inputField} value={text} onChangeText={text => setText(text)} />
      <Text style={{ textAlign: 'center' }}>Your Input:</Text>
      <Text style={{ textAlign: 'center', color: 'red' }}>{text}</Text>
    </View>
  )
}

export const APIExample = () => {

  const [word, setWord] = useState();
  const [loading, setLoading] = useState(true);

  const GenerateWord = async () => {
    setLoading(true);
    const response = await fetch('https://random-word-api.herokuapp.com/word');
    const json = await response.json();
    setWord(json);
    setLoading(false);
  }

  useEffect(() => {
    GenerateWord();
  }, []);

  return (
    <View style={[styles.container, styles.mid, { padding: 50, justifyContent: "space-evenly" }]}>
      {
        loading ?
        <Text>Loading your word...</Text> :
        (
          <View style={[styles.container, styles.mid, {justifyContent: "space-evenly" }]}>
            <Text style={{textAlign: 'center'}}>A random word from https://random-word-api.herokuapp.com/word:</Text>
            {word && <Text style={{fontSize: 30}}>{word}</Text>}
            <Button title='Generate New Word' onPress={GenerateWord}></Button>
          </View>
        )
      }
    </View>
  )
}

const exampleStyles = StyleSheet.create({
  box: {
    width: 300,
    height: 300,
    borderColor: 'blue',
    borderWidth: 2,
  },
  nestedBox: {
    flex: 1,
    borderColor: 'orange',
    borderWidth: 1,
    margin: 10,
    flexDirection: "row",
  },
  scrollBox: {
    borderColor: 'orange',
    borderWidth: 3,
    margin: 20,
  },
  scrollItem: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    margin: 20,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    borderColor: 'black',
    borderWidth: 2,
    height: 200,
    width: 150,
    margin: 10,
  },
  inputField: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
  }
});