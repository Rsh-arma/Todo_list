
import './App.css';
import Dashboard from './component';
import { Provider } from 'react-redux';
import store from './comman/store';

function App() {
  return (
    <div className="App">
    <Provider store = {store} >
            <Dashboard />
      </Provider>
    </div>
  );
}

export default App;
