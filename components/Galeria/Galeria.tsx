import React from "react";
import styles from "./Galeria.module.css"

export default function Galeria() {
  return (
    <section id="Galeria" className={styles.gallery}>
      <h1>Galeria</h1>
      <p>Estos son solo algunos de los eventos que hemos llevado a cabo</p>
      <div className={styles.gallery__container}>
        <figure className={styles.img_container} >
          <img className={styles.image} alt="Imagen de eventos pasados de hermes" src="src\assets\images\Hermes_image_1.jpg" height={"100%"} width={"100%"} />
        </figure>
        <figure className={styles.img_container} >
          <img className={styles.image} alt="Imagen de eventos pasados de hermes" src="src\assets\images\Hermes_image_1.jpg" height={"100%"} width={"100%"} />
        </figure>
        <figure className={styles.img_container} >
          <img className={styles.image} alt="Imagen de eventos pasados de hermes" src="src\assets\images\Hermes_image_1.jpg" height={"100%"} width={"100%"} />
        </figure>
        <figure className={styles.img_container} >
          <img className={styles.image} alt="Imagen de eventos pasados de hermes" src="src\assets\images\Hermes_image_1.jpg" height={"100%"} width={"100%"} />
        </figure>
        <figure className={styles.img_container} >
          <img className={styles.image} alt="Imagen de eventos pasados de hermes" src="src\assets\images\Hermes_image_1.jpg" height={"100%"} width={"100%"} />
        </figure>
        <figure className={styles.img_container} >
          <img className={styles.image} alt="Imagen de eventos pasados de hermes" src="src\assets\images\Hermes_image_1.jpg" height={"100%"} width={"100%"} />
        </figure>
        <figure className={styles.img_container} >
          <img className={styles.image} alt="Imagen de eventos pasados de hermes" src="src\assets\images\Hermes_image_1.jpg" height={"100%"} width={"100%"} />
        </figure>
        <figure className={styles.img_container} >
          <img className={styles.image} alt="Imagen de eventos pasados de hermes" src="src\assets\images\Hermes_image_1.jpg" height={"100%"} width={"100%"} />
        </figure>
        <figure className={styles.img_container} >
          <img className={styles.image} alt="Imagen de eventos pasados de hermes" src="src\assets\images\Hermes_image_1.jpg" height={"100%"} width={"100%"} />
        </figure>
      </div>
    </section>
  );
}
