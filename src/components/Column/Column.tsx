import React from 'react';
import classes from './Column.module.css';
import AddNewItem from '../AddNewItem/AddNewItem';
import Card from '../Card/Card';
import { useAppState } from '../../hooks/useAppState';
import { v4 as uuidv4 } from 'uuid';

interface ColumnProps {
  title: string;
  id: string;
}

export default function Column({ title, id }: ColumnProps) {
  const { state, dispatch } = useAppState();

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
      <div className={classes.columnFooter}>
        <AddNewItem
          toogleButtonText="+ Add another card"
          onAddItem={(text) =>
            dispatch({ type: 'ADD_TASK', payload: { text, id: uuidv4(), listId: id } })
          }
          theme="light"
        />
      </div>
    </div>
  );
}
