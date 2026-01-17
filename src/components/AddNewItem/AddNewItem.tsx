import React, { useState } from 'react';
import PixelatedButton from '../UI/PixelButton/PixelatedButton';
import AddNewItemForm from './form/AddNewItemForm';

interface addNewItemProps {
  onAddItem(text: string): void;
  toogleButtonText: string;
  theme: 'light' | 'dark' | 'primary';
}

export default function AddNewItem({ onAddItem, toogleButtonText, theme }: addNewItemProps) {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <AddNewItemForm
        onAddItem={(text) => {
          if (text !== '') {
            onAddItem(text);
          }
          setShowForm(false);
        }}
        variant={theme}
      />
    );
  }

  return (
    <PixelatedButton text={toogleButtonText} onClick={() => setShowForm(true)} variant={theme} />
  );
}
