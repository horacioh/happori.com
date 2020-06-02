import React from "react";
import { Link } from "gatsby";

export function CallOut(props) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);
  return (
    <div
      className={`absolute top-0 left-0 w-full px-4 py-2 bg-yellow-500 flex items-center justify-center transition transform duration-200 ease-in-out shadow-lg z-10 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
      {...props}
    />
  );
}

export function CovidCallout(props) {
  return (
    <CallOut>
      <span className="mx-4 font-semibold">
        Compra nuestros calcetines solidarios! Edicion limitada
      </span>
      <Link
        to="/calcetines-solidarios"
        className="bg-blue-600 text-white px-4 py-2 rounded leading-none uppercase hover:bg-blue-800 transition duration-100 text-xs font-bold"
      >
        quiero comprarlos
      </Link>
    </CallOut>
  );
}
