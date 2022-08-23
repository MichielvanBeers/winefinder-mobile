// Native Base
import { NativeBaseProvider } from "native-base";

// React redux toolkit
import { Provider } from "react-redux";
import store from './store'

// Index container screen
import Index from "./screens/Index";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Index />
      </NativeBaseProvider>
    </Provider>
  );
}
