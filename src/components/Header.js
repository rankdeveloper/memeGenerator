import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Header() {
  return (
    <div className="header">
      <div className="header-inner">
        <div className="logo">MemeGenerator</div>

        <div className="owner">
          
          <a href="https://github.com/rankdeveloper/memeGenerator">
            getCode
          </a>
        </div>
      </div>
    </div>
  );
}
