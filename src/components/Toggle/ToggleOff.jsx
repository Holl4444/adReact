import { useContext } from 'react';
import { ToggleContext } from '../../contexts/ToggleContext';

export default function ToggleOff({ children }) {
  const { on } = useContext(ToggleContext);

  return on ? null : children;
}
