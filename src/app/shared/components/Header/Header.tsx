import React from 'react';
import style from './Header.module.css';
import { useDarkTheme } from './hooks/useDarkTheme';

const Header = (): JSX.Element => {
  const { isDark, toggleTheme } = useDarkTheme();

  return (
    <header className={style.container}>
      <h1 className={`${style.title} bold`}>Where in the world?</h1>
      <button onClick={toggleTheme} className={`${style.toggleTheme} | medium`}>
        <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'} fa-lg`}></i>
        {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </header>
  );
};

export default Header;
