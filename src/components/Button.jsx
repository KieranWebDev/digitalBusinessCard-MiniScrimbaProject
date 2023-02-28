import React from 'react';

export default function Button({
  linkAddress,
  logo,
  logoAlt,
  innerText,
  style,
}) {
  return (
    <a className="btn" style={style} href={linkAddress}>
      <img className="logo" src={logo} alt={logoAlt} />
      <span>{innerText}</span>
    </a>
  );
}
