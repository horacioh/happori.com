import React from "react";
import { Section } from "./page-layout";
import { Heading2 } from "./headings";

export function HomeAbout(props) {
  return (
    <Section>
      <Heading2 className="text-primary">Nuestra Misi&oacute;n</Heading2>

      <p className="mt-10 w-full max-w-2xl mb-0 text-xl font-light text-primary-hover">
        En búsqueda de la ecuación de una moda más justa.
      </p>

      <p className="mt-2 w-full max-w-2xl mb-0 text-xl font-bold text-primary-hover">
        (Menos prendas + Mayor calidad X reaprovechar tejidos = Un mundo mejor)
      </p>

      <p className="mt-10 w-full max-w-2xl mb-0 text-xl font-light text-primary-hover">
        Creamos calcetines que ayudan a que el planeta no consuma recursos
        naturales. Cerramos el círculo de la vida útil de un tejido, lo
        reciclamos, alargamos su duración y le damos segundas, terceras e
        infinitas vidas.
      </p>

      <p className="mt-10 w-full max-w-2xl mb-0 text-xl font-light text-primary-hover">
        Queremos cambiar la manera de consumir y esto empieza en nuestros actos.
        Dejadnos preguntaros algo:{" "}
        <span className="font-semibold">
          ¿Cuánto hace que no zurces un calcetín descosido?
        </span>{" "}
        Es hora de coger la aguja y el hilo porque coser tus viejos calcetines
        es empezar a reparar nuestro planeta.
      </p>

      <p className="mt-10 w-full max-w-2xl mb-0 text-xl font-light text-primary-hover">
        Estamos en continuo movimiento. En la búsqueda constante de procesos de
        fabricación más limpios para consumir la menor cantidad de recursos
        naturales y reducir al máximo la contaminación en la creación de
        nuestras colecciones.
      </p>

      <p className="mt-10 w-full max-w-2xl mb-0 text-xl font-semibold text-primary-hover">
        Nos importan tanto tus pies como el medio ambiente
      </p>
      <p className="mt-2 w-full max-w-2xl mb-0 text-xl font-light text-primary-hover">
        Es por ello confeccionamos nuestros calcetines con algodón orgánico. Un
        textil ecológico que se cultiva en tierras libres de pesticidas y
        herbicidas. Su cultivo promueve técnicas de cultivo que mejoran la
        fertilidad del suelo y, por tanto, nuestro planeta. Estamos muy
        orgullosos de poder apostar por un mundo más limpio y seguro. Esperamos
        dar muy pronto el gran paso: saltar del algodón orgánico al algodón
        reciclado.{" "}
        <span className="font-semibold">
          Sólo así estaremos más cerca cumplir con nuestra misión: crear
          calcetines bonitos mediante la economía circular.
        </span>
      </p>
    </Section>
  );
}
