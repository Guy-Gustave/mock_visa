import React from "react";
import styles from "../styles/Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} alt="" src={`${props.imageUrl}`} />

      <h3 className={styles.cardContent}>{props.title}</h3>
    </div>
  );
};

export default Card;
