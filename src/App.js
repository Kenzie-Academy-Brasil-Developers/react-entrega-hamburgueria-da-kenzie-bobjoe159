import './App.js';
import Header from './components/Header'
import { GlobalStyle } from './global'
import './App'
import Dashboard from './components/Dashboard/index.jsx';
import { useEffect, useState } from 'react';
import api from './services/axios.js';

function App() {

  const [ products, setProducts ] = useState([])
  const [filteredProduct, setFilteredProduct] = useState([])
  const [ cartItem, setCartItem ] = useState([])

  useEffect( () => {
    api.get('/products')
    .then(resp => setProducts(resp.data))
  },[])

  
  return (
    <div className="App">
      <GlobalStyle/>
      <Header products={products} setFilteredProduct={setFilteredProduct}/>
      {
        filteredProduct.length === 0 ?
        <Dashboard products={products} cartItem={cartItem} setCartItem={setCartItem}  />
        :
        <Dashboard products={filteredProduct} cartItem={cartItem} setCartItem={setCartItem}  />
      }

    </div>
  );
}

export default App;
