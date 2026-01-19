import { useEffect, useRef } from 'react';

export function useFocus() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  });

  return ref;
}
