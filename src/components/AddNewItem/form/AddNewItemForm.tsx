import React, { useState } from 'react';
import PixelatedButton from '../../UI/PixelButton/PixelatedButton';
import CustomInput from '../../UI/CustomInput/CustomInput';
import { useFocus } from '../../../hooks/useFocus';

interface AddNewItemFormProps {
  onAddItem(text: string): void;
  variant: 'light' | 'dark' | 'primary';
}

export default function AddNewItemForm({ onAddItem, variant }: AddNewItemFormProps) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useFocus();

  const addButton = (
    <PixelatedButton
      text={inputValue === '' ? 'х Cancel' : '+ Add'}
      onClick={() => {
        onAddItem(inputValue);
      }}
      variant={variant}
    />
  );

  return (
    <CustomInput
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      rightComponent={addButton}
      ref={inputRef}
    />
  );
}
