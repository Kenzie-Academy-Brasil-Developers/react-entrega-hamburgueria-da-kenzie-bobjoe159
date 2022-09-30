import './App.css';
import Header from './components/Header'
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'
import { GlobalStyle } from './global'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <ProductsList/>
      <Cart/>
    </div>
  );
}

export default App;
