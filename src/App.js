import "./App.css";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopMenuBar from "./components/TopMenuBar/TopMenuBar";
import Footer from "./components/Footer";
import { ScoreProvider } from "./store/score-context";
import { createBrowserHistory } from "history";
import "./assets/fonts/sw-WEBFONT_VERSIONS/stylesheet.css";

function App() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <ScoreProvider>
        <div className="App">
          <TopMenuBar />
          <HomePage />
          <Footer />
        </div>
      </ScoreProvider>
    </BrowserRouter>
  );
}

export default App;
