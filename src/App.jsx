import { Home, Movies, Cart, MovieInfo } from "./pages";
import { Footer, Nav } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { films } from "./data";
import React, { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(film) {
    const dupeItem = cart.find((item) => item.id === film.id);
    setCart((oldCart) => {
      if (dupeItem) {
        return oldCart.map((item) =>
          item.id === dupeItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...oldCart, { ...film, quantity: 1 }];
    });
  }

  function changeQuantity(film, quantity) {
    setCart(
      cart.map((item) =>
        item.id === film.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter((film) => film.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function calcPrices() {
    let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }

  return (
    <Router>
      <Nav numberOfItems={numberOfItems()} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/films' element={<Movies films={films} />} />
        <Route
          path='/films/:id'
          element={
            <MovieInfo films={films} addToCart={addToCart} cart={cart} />
          }
        />
        <Route
          path='/cart'
          element={
            <Cart
              films={films}
              cart={cart}
              changeQuantity={changeQuantity}
              removeItem={removeItem}
              totals={calcPrices()}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
