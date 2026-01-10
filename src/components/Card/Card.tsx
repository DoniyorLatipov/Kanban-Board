import React from 'react';
import classes from './Card.module.css';

interface CardProps {
  text: string;
}

export default function Card({ text }: CardProps) {
  return (
    <div className={classes.card}>
      <h3 className={classes.cardTitle}>{text}</h3>
    </div>
  );
}
