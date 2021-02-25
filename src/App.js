import './App.css';
import Home from './components/Main/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Input/>
      <Footer/>
    </div>
  );
}

export default App;
