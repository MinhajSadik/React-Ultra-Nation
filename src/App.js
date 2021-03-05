import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country/Country';
import './Component/Country/Country.css'
import Cart from './Component/Cart/Cart.js';

function App() {
  const [contries, setCountries] = useState([])

  const [cart, setCart] = useState([])
  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data =>{ 
    // console.log(data);
    setCountries(data);
    const names = data.map(country => country.name);
    })
    .catch(error => setCountries(error))
  }, [])

const handleAddCountry = (country) => {
  const newCart = [...cart, country];
  setCart(newCart);
}

  return (
    <div className="App">

      <p>COUNTRY Loaded! : {contries.length}</p>
      <h3>Country:{cart.length}</h3>
      <Cart cart={cart}></Cart>
      
      <div>
        {
          contries.map(country => <Country handleAddCountry={handleAddCountry} country={country} key={country.alpha3Code}></Country>)
        }
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
