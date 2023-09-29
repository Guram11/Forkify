import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import ModalWindow from "./components/ModalWindow";
import { useRecipeContext } from "./Context/RecipeContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { modalOpen } = useRecipeContext();

  return (
    <>
      <div
        className={
          modalOpen
            ? "overlay fixed top-0 left-0 w-full h-full transition-all duration-500 z-40 bg-overlay backdrop-blur-sm"
            : "overlay fixed top-0 left-0 w-full h-full transition-all duration-500 z-40 bg-overlay backdrop-blur-sm invisible opacity-0 "
        }
      ></div>
      {modalOpen && <ModalWindow />}
      <div
        className="container bg-white grid-rows-container overflow-hidden m-container
       shadow-container grid max-w-container min-h-container grid-cols-container rounded-container"
      >
        <Header />
        <Sidebar />
        <Main />
        <Toaster
          position="top-center"
          gutter={1}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </div>
    </>
  );
}

export default App;
