import React from "react";
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
import Snowfall from "react-snowfall";

const App = () => {
  // const [cart, setCart] = useState([]);
  // function addItemToCart(item) {
  //   let existingItem = cart.find((i) => i.name === item.name);
  //   if (existingItem) {
  //     existingItem.count++;
  //     setCart([...cart]);
  //   } else {
  //     setCart([...cart, { ...item, count: 1 }]);
  //   }
  // }

  // function minusItemFromCart(item) {
  //   const itemIndex = cart.findIndex((cart) => cart.name === item.name);
  //   const newCarts = [...cart];
  //   newCarts[itemIndex].count--;
  //   const MinusElem = newCarts.filter((cart) => cart.count);
  //   setCart(MinusElem);
  // }
  // function deleteItemFromCart(item) {
  //   setCart([...cart].filter((cartItem) => cartItem.name !== item.name));
  // }

  return (
    <>
      <Snowfall />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route
            path="rolls"
            element={
              <Rolls
              />
            }
          />
          <Route
            path="rolls/:name"
            element={
              <RollDetail
              />
            }
          />
          <Route
            path="sushi"
            element={
              <Sushi
              />
            }
          />
          <Route
            path="sushi/:name"
            element={
              <SushiDetails
              />
            }
          />
          <Route
            path="gunkans"
            element={
              <Gunkans
              />
            }
          />
          <Route
            path="gunkans/:name"
            element={
              <GunkansDetails
              />
            }
          />
          <Route
            path="sets"
            element={
              <Sets
              />
            }
          />
          <Route
            path="sets/:name"
            element={
              <SetsDetails
              />
            }
          />
          <Route
            path="sause"
            element={
              <Sause
              />
            }
          />
          <Route
            path="sause/:name"
            element={
              <SauseDetails
              />
            }
          />
          <Route
            path="PolitSave"
            element={
              <PolitSave
              />
            }
          />
          <Route
            path="Cart"
            element={
              <Cart/>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
