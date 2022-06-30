import logo from './logo.svg';
import './App.css';
import Info from './Hooks/Info/Info';
import Navigator from './Hooks/Navigator/Navigator';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter} from 'react-router-dom';
import Dashboard from './Hooks/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
          <HashRouter > 

              <Info />
              <Navigator />

              <Dashboard />
          </HashRouter>
    </div>
  );
}

export default App;
