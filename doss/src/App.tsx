import GlobalStyle from "styles/GlobalStyle";
import Router from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Router />
    </>
  );
}

export default App;
