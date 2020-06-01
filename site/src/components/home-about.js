import React from "react";
import { Section } from "./page-layout";
import { Heading2 } from "./headings";

export function HomeAbout(props) {
  return (
    <Section>
      <Heading2 className="text-primary">Nuestra Misi&oacute;n</Heading2>

      <p className="mt-10 w-full max-w-2xl mb-0 text-xl font-light text-primary-hover">
        Amantes de los calcetines diferentes y preocupados cada vez más por el
        medioambiente y la sostenibilidad para preservar nuestros planeta nace
        la idea de Happori.
      </p>

      <p className="mt-10 w-full max-w-2xl mb-0 text-xl font-light text-primary-hover">
        Como parte de nuestra filosofía está el hecho de trabajar con partners
        que, de una manera u otra, velen por un desarrollo sostenible. Ponemos y
        pondremos nuestros esfuerzo en colaborar con stakeholders que se
        preocupen por el medio ambiente, sostenibilidad y el cambio climático.
      </p>

      <p className="mt-10 w-full max-w-2xl mb-0 text-xl font-light text-primary-hover">
        Happori proviene de la palabra maorí Hapori que significa{" "}
        <i>comunidad</i>, porque queremos crear una comunidad que miré y velé
        por la nuestro planeta.
      </p>
    </Section>
  );
}
