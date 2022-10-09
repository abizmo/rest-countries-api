import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import style from './Button.module.css';

interface ButtonProps {
  onClick?: () => void;
  size?: 'small' | 'big';
  to?: string;
}

const buttonSize = {
  big: style.buttonBig,
  small: style.buttonSmall,
};

const Button = ({
  onClick,
  size = 'small',
  children,
  to,
}: PropsWithChildren<ButtonProps>): React.ReactElement => {
  const classnames = `${style.button} ${buttonSize[size]}`;

  return to !== undefined ? (
    <Link to={to} className={classnames}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={classnames}>
      {children}
    </button>
  );
};

export default Button;
