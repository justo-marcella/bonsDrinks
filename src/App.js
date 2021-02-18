import logo from './logo.svg';
import './App.css';
import FaleConosco from './components/componentForm/FaleConosco';
import Menu from './components/componentMenu/Menu';
import Footer from './components/componentFooter/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <FaleConosco/>
      <Footer/>
    </div>
  );
}

export default App;
