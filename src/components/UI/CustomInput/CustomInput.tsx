import React, { forwardRef } from 'react';
import classes from './CustomInput.module.css';
import clsx from 'clsx';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightComponent?: React.ReactNode;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onChange, rightComponent, ...rest }, ref) => {
    return (
      <div
        className={clsx(
          classes.customInputContainer,
          rightComponent && classes.customInputContainerWithRightComponent,
        )}
      >
        <input
          value={value}
          onChange={onChange}
          className={classes.customInput}
          type="text"
          placeholder="Enter your text"
          {...rest}
          ref={ref} // Передаем ref
        />
        {rightComponent && <div className={classes.rightComponent}>{rightComponent}</div>}
      </div>
    );
  },
);

export default CustomInput;
