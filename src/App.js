import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import Cart from "./compoenent/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="App App-header">
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
