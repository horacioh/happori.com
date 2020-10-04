import React from "react";
import { Link as GatsbyLink } from "gatsby";

export function Link({
  children,
  to,
  activeClassName,
  partiallyActive,
  className,
  ...other
}) {
  const internal = /^\/(?!\/)/.test(to);

  if (internal) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        className={className ? className : "text-secondary hover:underline"}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a
      href={to}
      className={className ? className : "text-secondary hover:underline"}
      {...other}
    >
      {children}
    </a>
  );
}
