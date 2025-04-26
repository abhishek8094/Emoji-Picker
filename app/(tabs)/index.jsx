import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import EmojiSelector, { Categories } from "react-native-emoji-selector";

export default function HomeScreen() {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const handleEmojiSelect = (emoji) =>{
    console.log("abhishek--->", emoji );
     setSelectedEmoji(emoji)
     setShowPicker(false);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.pickerButton}  onPress={() => setShowPicker(true)}>
        <Text style={styles.buttonText}>Open Emoji Picker</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 10 }}>
        {selectedEmoji !== "" && (
          <Text style={{ fontSize: 20 }}>Selected Emoji : {selectedEmoji}</Text>
        )}
      </View>
      {
        showPicker && (
          <EmojiSelector
          onEmojiSelected={handleEmojiSelect}
          category={Categories.all}
          showTabs={true}
          showSearchBar={true}
          showHistory={false}
          columns={10}
          placeholder="Search Emoji..."/>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  pickerButton: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
