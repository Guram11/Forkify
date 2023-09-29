import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./components/store/index.js";
import RecipeProvider from "./Context/RecipeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </Provider>
);
