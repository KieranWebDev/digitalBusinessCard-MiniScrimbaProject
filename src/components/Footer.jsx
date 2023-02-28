import React from 'react';

import twitter from '../images/square-twitter.svg';
import instagram from '../images/square-instagram.svg';
import github from '../images/square-github.svg';
import linkedin from '../images/linkedin.svg';

export default function Footer({
  twitterUser,
  instagramUser,
  githubUser,
  linkedinUser,
}) {
  return (
    <footer>
      <a href={`https://twitter.com/${twitterUser}`}>
        <img src={twitter} alt="twitter" />
      </a>
      <a href={`https://instagram.com/${instagramUser}`}>
        {' '}
        <img src={instagram} alt="instagram" />
      </a>
      <a href={`https://github.com/${githubUser}`}>
        {' '}
        <img src={github} alt="github" />
      </a>
      <a href={`https://linkedin.com/in/${linkedinUser}`}>
        {' '}
        <img src={linkedin} alt="linkedin" />
      </a>
    </footer>
  );
}
