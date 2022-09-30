import './App.js';
import Header from './components/Header'
import { GlobalStyle } from './global'
import './App'
import Dashboard from './components/Dashboard/index.jsx';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
