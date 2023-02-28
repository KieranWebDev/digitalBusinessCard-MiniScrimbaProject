import React from 'react';

import twitterImg from '../images/square-twitter.svg';
import instagramImg from '../images/square-instagram.svg';
import githubImg from '../images/square-github.svg';
import linkedinImg from '../images/linkedin.svg';

export default function Footer({ twitter, instagram, github, linkedin }) {
  return (
    <footer>
      <a href={twitter} target="_blank">
        <img src={twitterImg} alt="twitter" />
      </a>
      <a href={instagram} target="_blank">
        {' '}
        <img src={instagramImg} alt="instagram" />
      </a>
      <a href={github} target="_blank">
        {' '}
        <img src={githubImg} alt="github" />
      </a>
      <a href={linkedin} target="_blank">
        {' '}
        <img src={linkedinImg} alt="linkedin" />
      </a>
    </footer>
  );
}
