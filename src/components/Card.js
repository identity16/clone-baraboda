import React from "react";
import "./Card.scss";

function Card({ children }) {
  return <article className="Card">{children}</article>;
}

export default Card;
