import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState<string>("");
  const [test, setTest] = useState({
    name: "Phi Bui",
    age: 25,
  });
  const [count, setCount] = useState(0);
  //jsx
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "600" }}>count = {count}</Text>
      <View>
        <Button
          title="Increase"
          onPress={() => setCount(count + 1)}
          color={"red"}
        ></Button>
      </View>
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
});
