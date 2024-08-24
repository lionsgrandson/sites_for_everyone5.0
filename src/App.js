import Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import Hero from "./components/hero/hero";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <Hero/>
        {/* <Footer/> */}
      </header>
    </div>
  );
}

export default App;
