// React
import { useState, useEffect } from "react";

// Native Base
import { NativeBaseProvider, StatusBar } from "native-base";

// React redux toolkit
import { Provider } from "react-redux";
import store from "./store";

// Index container screen
import Index from "./screens/Index";

// Connection notification top header
import Notification from "./components/Error/Notification";

// Netinfo to check wifi state
import NetInfo from "@react-native-community/netinfo"

export default function App() {
  const [ isWifiConnected, setIsWifiConnected ] = useState<boolean | null>(null)

  useEffect(() => {
    NetInfo.addEventListener(state => {
      console.log(state.type)
      if (state.type === "wifi") {
        setIsWifiConnected(true)
      }
      else {
        setIsWifiConnected(false)
      }
    });
  },[NetInfo])

  return (
    <Provider store={store}>
      <StatusBar />
      <NativeBaseProvider>
        {!isWifiConnected && <Notification title="Please connect to your home wifi"/>}
        <Index />
      </NativeBaseProvider>
    </Provider>
  );
}
