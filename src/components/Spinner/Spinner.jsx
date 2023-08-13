import React from "react";
import { Html } from "@react-three/drei";

import spinnerImg from "../../assets/images/spinner.png";

import styles from "./spinner.module.css";

export const Spinner = () => {
  return (
    <Html>
      <div className={styles.overlay}>
        <img
          loading="lazy"
          decoding="async"
          src={spinnerImg}
          className={styles.spinner}
          alt="Спиннер"
        />
      </div>
    </Html>
  );
};
