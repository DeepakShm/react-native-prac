import { SafeAreaView, View, StatusBar } from "react-native";
import PreviewFlex from "./components/flexbox/PreviewFlex";

export default function App() {
  return (
    <SafeAreaLayout>
      <PreviewFlex />
    </SafeAreaLayout>
  );
}

export function SafeAreaLayout({ children }: any) {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>{children}</View>
    </SafeAreaView>
  );
}
