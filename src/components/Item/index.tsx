import React from "react";
import styles from "./style.module.css";

interface Props {
  name: string;
}

export const Item = ({ name }: Props) => {
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <p>Item description</p>
    </div>
  );
};
