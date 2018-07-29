import * as React from 'react';
import logo from 'src/images/watermelon.png';
import './styles.scss';

export const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__container">
        <div className="logo__circle">
          <img src={logo}/>
        </div>
      </div>
    </div>
  );
};
