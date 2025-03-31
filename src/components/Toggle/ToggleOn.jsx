import { useContext } from 'react';
import { ToggleContext } from '../../contexts/ToggleContext';

export default function ToggleOn({ children }) {
  const { on } = useContext(ToggleContext);

  return on ? children : null;
}
