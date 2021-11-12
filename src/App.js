import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopMenuBar from "./components/TopMenuBar/TopMenuBar";
import Footer from "./components/Footer";
import { ScoreProvider } from "./store/score-context";
import { createBrowserHistory } from "history";
import "./assets/fonts/Kodchasan/stylesheet.css";
import ScrollToTop from "./components/UI/ScrollToTop";
import Background from "./components/UI/Background/Background";

function App() {
  const [gameRunning, setGameRunning] = useState(false);
  console.log("gameRunning: ", gameRunning);

  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <ScrollToTop />
      <Background />
      <ScoreProvider>
        <div className="App">
          <TopMenuBar
            gameRunning={gameRunning}
            setGameRunning={setGameRunning}
          />
          <HomePage setGameRunning={setGameRunning} gameRunning={gameRunning} />
          <Footer />
        </div>
      </ScoreProvider>
    </BrowserRouter>
  );
}

export default App;
