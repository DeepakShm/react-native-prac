import { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

type FlexDirType = "column" | "row" | "column-reverse" | "row-reverse";

const PreviewFlex = () => {
  const [dir, setDir] = useState<FlexDirType>("column");
  const boxes = ["red", "green", "yellow"];
  return (
    <View style={{ padding: 20, gap: 20 }}>
      <Text>
        Flex Direction :
        <Text
          style={{
            color: "blue",
            fontWeight: "500",
            textTransform: "capitalize",
          }}
        >
          {dir}
        </Text>
      </Text>
      <View style={flex.row}>
        <Button title="Column" onPress={() => setDir("column")} />
        <Button title="Row" onPress={() => setDir("row")} />
        <Button
          title="Column Reverse"
          onPress={() => setDir("column-reverse")}
        />
        <Button title="Row Reverse" onPress={() => setDir("row-reverse")} />
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={[
            box.container,
            { flexDirection: dir, justifyContent: "center" },
          ]}
        >
          {boxes.map((b) => {
            return (
              <View
                key={b}
                style={[box.boxStyle, { backgroundColor: b }]}
              ></View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const flex = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
});

const box = StyleSheet.create({
  container: {
    gap: 10,
  },
  boxStyle: {
    width: 50,
    height: 50,
  },
});
export default PreviewFlex;
