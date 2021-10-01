import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage'
import TopMenuBar from './components/TopMenuBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App"><TopMenuBar />

      <HomePage />
     <Footer />
    </div>
  );
}

export default App;
