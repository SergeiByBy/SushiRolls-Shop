import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addItemToCart } from "../cartSlice";
import Counter from "../Cart/Counter/Counter";
import ButtonBack from "../ButtonBack/ButtonBack";
import { useDispatch } from "react-redux";
import { RollsStorage } from "./Rolls/Rolls.Storage";
// import axios from "axios";

const CardsProduct = ({ name, rollsWithCount }) => {
  const dispatch = useDispatch();
  const [displayedItems, setDisplayedItems] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (fetching) {
      setDisplayedItems([...RollsStorage]);
      const newItems = rollsWithCount.slice(
        
        (currentPage - 1) * 10,
        currentPage * 10
      );
      setDisplayedItems((prevItems) => [...prevItems, ...newItems]);
      setFetching(false);
      setCurrentPage((prevPage) => prevPage + 1);
    }

    document.addEventListener("scroll", scrollhandler);
    return function () {
      document.removeEventListener("scroll", scrollhandler);
    };
  }, []);

  // const [totalCount, setTotalCount] = useState(0);

  // useEffect(() => {
  //   if (fetching) {
  //     console.log("fetching");
  //     axios
  //       .get(
  //         `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`
  //       )
  //       .then((resp) => {
  //         setPhotos([...photos, ...resp.data]);
  //         setCurrentPage((prevState) => prevState + 1);
  //         // setTotalCount(resp.headers["x-total-count"]);
  //       })
  //       .finally(() => setFetching(false));
  //   }
  // }, [fetching]);

  useEffect(() => {}, []);

  const scrollhandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <div className="container">
      <ButtonBack />
      <div className="rollsBloc">
        <h2 className="RollsTitle">{name}</h2>
        <div className="rolls">
          {displayedItems.map((item) => {
            return (
              <div className="box" key={item.id}>
                <Link to={item.name} data-actio={item.id}>
                  <div className="box_img">
                    <img src={item.src} alt="img" />
                  </div>
                </Link>
                <div className="box-descr">
                  <h4>{item.price} ₽.</h4>
                  <h3>{item.name}</h3>
                  <p className="box-descr__structure">{item.structure}</p>
                  <div className="box-descr_button">
                    {item.count !== undefined ? (
                      <Counter item={item} />
                    ) : (
                      <button
                        type="button"
                        onClick={() => dispatch(addItemToCart(item))}
                      >
                        Добавить в корзину
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsProduct;
