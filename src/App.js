import './App.css';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import Nav from './components/nav/Nav';
import Routing from './components/routes/Routing';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routing />
      </BrowserRouter  >

    </div>
  );
}

export default App;
