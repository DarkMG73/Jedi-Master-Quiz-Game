import "./App.css";
import HomePage from "./pages/HomePage";
import TopMenuBar from "./components/TopMenuBar";
import Footer from "./components/Footer";
import { ScoreProvider } from "./store/score-context";

function App() {
  return (
    <ScoreProvider>
      <div className="App">
        <TopMenuBar />

        <HomePage />
        <Footer />
      </div>
    </ScoreProvider>
  );
}

export default App;
