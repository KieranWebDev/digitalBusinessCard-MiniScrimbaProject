import React from 'react';
import Button from './Button';

import email from '../images/envelope-solid.svg';
import linkedin from '../images/linkedin.svg';

export default function Header({
  name,
  jobTitle,
  website,
  aboutMeText,
  interestsText,
}) {
  return (
    <div className="about-me">
      <h1>{name}</h1>
      <h3>{jobTitle}</h3>
      <h4>
        <a href={website} target="_blank">
          {website}
        </a>
      </h4>
      <div className="button-container">
        <Button
          linkAddress={'https://store.gorillaz.com/eu/?ref=direct'}
          innerText="Email"
          logo={email}
          logoAlt="email"
        />
        <Button
          linkAddress={
            'https://store.gorillaz.com/eu/cracker-island-cassette-collection-limited-edition-print/5054197344541.html?ref=https%3A%2F%2Fwww.gorillaz.com%2F%3Fintcmp%3D220831%2Fgorillaz%2Fwmi%2Fspl%2Fs_pr%2Fimg%2Fbdy%2Fww%2Fexclusive-bundles'
          }
          innerText="Linkedin"
          logo={linkedin}
          logoAlt="linkedin"
          style={{ backgroundColor: 'blue', color: 'white' }}
        />
      </div>
      <h2>About</h2>
      <p>{aboutMeText}</p>
      <h2>Interests</h2>
      <p>{interestsText}</p>
    </div>
  );
}
