import React, {
  useReducer,
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';
import {Text, View, Button, StyleSheet, TextInput, Alert} from 'react-native';

const themes = {
  light: {
    backgroundColor: '#ffffff',
  },
  dark: {
    backgroundColor: '#222222',
  },
};

const ThemeContext = createContext(themes.light);

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const TutoHooks = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  const inputRef = useRef(null); // Inicia como null

  const handleClick = () => {
    Alert.alert('El texto ingresado es: ' + inputValue); // Usa Alert para mostrar el valor
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <ThemeContext.Provider value={themes.dark}>
        <View style={styles.container}>
          <Text style={styles.counter}>{contador}</Text>
          <Button title="+" onPress={() => setContador(contador + 1)} />
          <Toolbar />
        </View>
      </ThemeContext.Provider>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={text => setInputValue(text)} // Actualiza el estado con el texto
        />
        <Button onPress={handleClick} title="useRef" />
      </View>
      <View style={styles.container}>
        <Text>Count: {state.count}</Text>
        <Button title="-" onPress={() => dispatch({type: 'decrement'})} />
        <Button title="+" onPress={() => dispatch({type: 'increment'})} />
      </View>
    </>
  );
};

const Toolbar = () => {
  return (
    <View style={styles.toolbar}>
      <ThemedButton />
    </View>
  );
};

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <View
      style={[
        styles.buttonContainer,
        {backgroundColor: theme.backgroundColor},
      ]}>
      <Button
        title="I am styled by theme context!"
        color="#fff"
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 90,
    marginBottom: 20,
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  toolbar: {
    margin: 20,
  },
});

export default TutoHooks;
