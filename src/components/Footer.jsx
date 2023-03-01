import React from 'react';
import { SocialIcon } from 'react-social-icons';


function PortfolioFooter() {
  return (
    <div>
      <div className="footer__content">
        <div className="footer__content__socials">
            <SocialIcon url="https://www.linkedin.com" />
            <SocialIcon url="https://www.github.com" />
            <SocialIcon url="https://www.instagram.com" />
        </div>
        <div className="footer__content__contact">
            <p>Made by Chris Poturalski</p>
        </div>
        </div>
    </div>
    );
}

export default PortfolioFooter;

