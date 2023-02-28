import React from 'react';
import Button from './Button';

import email from '../images/envelope-solid.svg';
import linkedin from '../images/linkedin.svg';

export default function Header({ name, jobTitle, website }) {
  return (
    <>
      <h1>{name}</h1>
      <h3>{jobTitle}</h3>
      <h4>
        <a href={website} target="_blank">
          {website}
        </a>
      </h4>
      <div className="button-container">
        <Button innerText="Email" logo={email} logoAlt="email" />
        <Button
          innerText="Linkedin"
          logo={linkedin}
          logoAlt="linkedin"
          style={{ backgroundColor: 'blue', color: 'white' }}
        />
      </div>
    </>
  );
}
