import { useContext } from 'react';
import { AppStateContext } from '../contexts/AppStateContext';

export function useAppState() {
  return useContext(AppStateContext);
}
