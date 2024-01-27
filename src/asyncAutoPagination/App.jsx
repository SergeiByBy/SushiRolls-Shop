import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import PhotosPagination from "./PhotosPagination";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    if (fetching) {
      console.log("fetching");
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`
        )
        .then((resp) => {
          setPhotos([...photos, ...resp.data]);
          setCurrentPage((prevState) => prevState + 1);
          // setTotalCount(resp.headers["x-total-count"]);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollhandler);
    return function () {
      document.removeEventListener("scroll", scrollhandler);
    };
  }, []);

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
    <>
      <PhotosPagination photos={photos} />
    </>
  );
};
export default App;
