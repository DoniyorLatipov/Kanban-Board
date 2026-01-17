import React from 'react';
import classes from './Column.module.css';

interface ColumnProps {
  title: string;
}

export default function Column({ title, children }: React.PropsWithChildren<ColumnProps>) {
  return (
    <div className={classes.column}>
      <div className={classes.columnHeader}>
        <h2 className={classes.columnTitle}>{title}</h2>
      </div>
      <div className={classes.columnContainer}>{children}</div>
    </div>
  );
}
