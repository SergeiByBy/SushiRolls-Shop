import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Button.style.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Button = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Link to="/sets">
        <button className="btn">{props.text}</button>
      </Link>
    </div>
  );
};
export default Button;
