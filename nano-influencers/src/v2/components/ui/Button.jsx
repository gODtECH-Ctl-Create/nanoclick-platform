import React from "react";
import { Link } from "react-router-dom";

export function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className = "",
  ...props
}) {
  const classes = ["ni-button", `ni-button--${variant}`, `ni-button--${size}`, className]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={props.type || "button"} {...props}>
      {children}
    </button>
  );
}
