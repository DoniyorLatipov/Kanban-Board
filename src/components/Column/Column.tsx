import React from 'react';
import classes from './Column.module.css';
import Card from '../Card/Card';
import { useAppState } from '../../hooks/useAppState';

interface ColumnProps {
  title: string;
  id: number;
}

export default function Column({ title, id }: ColumnProps) {
  const { state } = useAppState();

  return (
    <div className={classes.column}>
      <div className={classes.columnHeader}>
        <h2 className={classes.columnTitle}>{title}</h2>
      </div>
      <div className={classes.columnContainer}>
        {state.tasks
          .filter(({ listId }) => listId === id)
          .map(({ text, id }) => (
            <Card text={text} key={id} />
          ))}
      </div>
    </div>
  );
}
