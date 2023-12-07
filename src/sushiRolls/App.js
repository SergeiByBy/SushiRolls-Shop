import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main/Main";
import "./Style//Normalize.style.css";
import "./Style/style.css";
import "./Style/media.style.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Rolls from "./Menu/Rolls/Rolls";
import Sushi from "./Menu/Sushi/Sushi";
import Gunkans from "./Menu/Gunkans/Gunkans";
import PolitSave from "./Footer/PolicalSave";
import Sets from "./Menu/Sets/Sets";
import RollDetail from "./Menu/Rolls/RollDetail";
import SushiDetails from "./Menu/Sushi/SushiDetails";
import NotFound from "./NotFound/NotFound";
import GunkansDetails from "./Menu/Gunkans/GunkansDetail";
import SetsDetails from "./Menu/Sets/SetsDetails";
import Sause from "./Menu/Sause/Sause";
import SauseDetails from "./Menu/Sause/SauseDetails";
import ScrollToTop from "./ScrollTop/SrollTop";
import Cart from "./Cart/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  function addItemToCart(item) {
    let existingItem = cart.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.count++;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, count: 1 }]);
    }
  }

  function minusItemFromCart(item) {
    const itemIndex = cart.findIndex((cart) => cart.name === item.name);
    const newCarts = [...cart];
    newCarts[itemIndex].count--;
    const MinusElem = newCarts.filter((cart) => cart.count);
    setCart(MinusElem);
  }
  function deleteItemFromCart(item) {
    setCart([...cart].filter((cartItem) => cartItem.name !== item.name));
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout cart={cart} />}>
          <Route index element={<Main />} />
          <Route
            path="rolls"
            element={<Rolls addItemToCart={addItemToCart} />}
          />
          <Route
            path="rolls/:name"
            element={<RollDetail addItemToCart={addItemToCart} />}
          />
          <Route
            path="sushi"
            element={<Sushi addItemToCart={addItemToCart} />}
          />
          <Route
            path="sushi/:name"
            element={<SushiDetails addItemToCart={addItemToCart} />}
          />
          <Route
            path="gunkans"
            element={<Gunkans addItemToCart={addItemToCart} />}
          />
          <Route
            path="gunkans/:name"
            element={<GunkansDetails addItemToCart={addItemToCart} />}
          />
          <Route path="sets" element={<Sets addItemToCart={addItemToCart} />} />
          <Route
            path="sets/:name"
            element={<SetsDetails addItemToCart={addItemToCart} />}
          />
          <Route
            path="sause"
            element={<Sause addItemToCart={addItemToCart} />}
          />
          <Route
            path="sause/:name"
            element={<SauseDetails addItemToCart={addItemToCart} />}
          />
          <Route
            path="PolitSave"
            element={<PolitSave addItemToCart={addItemToCart} />}
          />
          <Route
            path="Cart"
            element={
              <Cart
                cart={cart}
                minusItemFromCart={minusItemFromCart}
                addItemToCart={addItemToCart}
                deleteItemFromCart={deleteItemFromCart}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
