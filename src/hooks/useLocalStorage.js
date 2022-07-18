import { useState, useEffect } from 'react';

export default function useLocalStorage(defaultValue) {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? defaultValue;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state));
  });

  return [state, setState];
}
