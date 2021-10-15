import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopMenuBar from "./components/TopMenuBar/TopMenuBar";
import Footer from "./components/Footer";
import { ScoreProvider } from "./store/score-context";
import { createBrowserHistory } from "history";
import "./assets/fonts/Kodchasan/stylesheet.css";
import "./assets/fonts/GoodTimes/stylesheet.css";

function App() {
  const [passGameRunning, setPassGameRunning] = useState(false);
  console.log("setPassGameRunning: ", setPassGameRunning);

  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <ScoreProvider>
        <div className="App">
          <TopMenuBar gameRunning={passGameRunning} />
          <HomePage setPassGameRunning={setPassGameRunning} />
          <Footer />
        </div>
      </ScoreProvider>
    </BrowserRouter>
  );
}

export default App;
