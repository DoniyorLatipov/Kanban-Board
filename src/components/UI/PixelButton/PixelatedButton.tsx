import clsx from 'clsx';
import React from 'react';

import classes from './PixelatedButton.module.scss';

interface PixelatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: 'dark' | 'light' | 'primary';
}

export default function PixelatedButton({ text, variant, ...rest }: PixelatedButtonProps) {
  return (
    <button
      type="button"
      className={clsx(classes.pixelatedButton, classes[`pixelatedButton--${variant}`])}
      {...rest}
    >
      <p>{text}</p>
    </button>
  );
}
