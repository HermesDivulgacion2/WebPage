import React from "react";
import styles from "./Galeria.module.css"
import Image from "next/image";
import HermesImage from "../../assets/images/Hermes_image_1.jpg";

export default function Galeria() {
  return (
    <section id="Galeria" className={styles.gallery}>
      <h1>Galeria</h1>
      <p>Estos son solo algunos de los eventos que hemos llevado a cabo</p>
      <div className={styles.gallery__container}>
        <figure className={styles.img_container} >
          <Image className={styles.image} alt="Imagen de eventos pasados de hermes" src={HermesImage} />
        </figure>
        <figure className={styles.img_container} >
          <Image className={styles.image} alt="Imagen de eventos pasados de hermes" src={HermesImage} />
        </figure>
        <figure className={styles.img_container} >
          <Image className={styles.image} alt="Imagen de eventos pasados de hermes" src={HermesImage} />
        </figure>
        <figure className={styles.img_container} >
          <Image className={styles.image} alt="Imagen de eventos pasados de hermes" src={HermesImage} />
        </figure>
        <figure className={styles.img_container} >
          <Image className={styles.image} alt="Imagen de eventos pasados de hermes" src={HermesImage} />
        </figure>
        <figure className={styles.img_container} >
          <Image className={styles.image} alt="Imagen de eventos pasados de hermes" src={HermesImage} />
        </figure>
        <figure className={styles.img_container} >
          <Image className={styles.image} alt="Imagen de eventos pasados de hermes" src={HermesImage} />
        </figure>
        <figure className={styles.img_container} >
          <Image className={styles.image} alt="Imagen de eventos pasados de hermes" src={HermesImage} />
        </figure>
        <figure className={styles.img_container} >
          <Image className={styles.image} alt="Imagen de eventos pasados de hermes" src={HermesImage} />
        </figure>
      </div>
    </section>
  );
}
