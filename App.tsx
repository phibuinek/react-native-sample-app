import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Phi Bùi It</Text>
      </View>
      <Text style={styles.hello1}>Hello World with Phi Bùi It! 1</Text>
      <Text>Hello World with Phi Bùi It! 2</Text>
    </View>
  );
}

//ko có khái niệm css // css in js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  hello1: {
    color: "red",
    fontSize: 60,
    borderColor: "green",
    borderWidth: 1,
    padding: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  parent: {
    fontSize: 60,
    color: "green",
  },
});
