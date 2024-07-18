import Main from "./pages/Main";
import { Provider } from "./provider/Provider";

function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default App;
