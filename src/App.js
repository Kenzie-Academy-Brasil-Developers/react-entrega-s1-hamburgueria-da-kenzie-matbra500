import "./reset.css";
import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import Input from "./components/Input";
import CartContainer from "./components/CartContainer";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Hamburguers",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Hamburguers",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Hamburguers",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca-cola",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milkshake Ovomaltine",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);

  function showProducts(input) {
    let filter = products.filter((item) =>
      item.category.toLowerCase().includes(`${input.toLowerCase()}`)
    );
    if (input !== "") {
      setFilteredProducts(filter);
    } else {
      setFilteredProducts(products);
    }
  }

  function handleClick(id) {
    let found = products.find((item) => item.id === id);
    if (currentSale.some((element) => element.id === found.id) === false) {
      setCurrentSale([...currentSale, found]);
      setCartTotal([...cartTotal, found.price]);
    }
  }

  function CalculatePrice(list) {
    const reducer = (acc, next) => acc + next;
    const reduce = list.reduce(reducer, 0).toFixed(2);
    return reduce;
  }

  function RemoverTodos() {
    setCurrentSale([]);
    setCartTotal([]);
  }

  function Remover(id) {
    const removedItem = currentSale.find((item) => item.id === id);
    setCartTotal([...cartTotal, Number(`-${removedItem.price}`)]);
    const filtered = currentSale.filter((item) => item.id !== id);
    setCurrentSale(filtered);
  }

  return (
    <div className="App">
      <h1>
        Burguer
        <h3>Kenzie</h3>
      </h1>
      <Input callback={showProducts} />
      <div>
        <MenuContainer
          list={filteredProducts}
          pricesList={cartTotal}
          callback={handleClick}
        />
      </div>
      <div>
        <CartContainer
          list={currentSale}
          callbackPreco={CalculatePrice(cartTotal)}
          callbackRemover={RemoverTodos}
          callback={Remover}
        />
      </div>
    </div>
  );
}

export default App;
