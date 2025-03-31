import { useContext } from 'react';
import { ToggleContext } from '../../contexts/ToggleContext';

export default function ToggleButton({ children }) {
  const { toggle } = useContext(ToggleContext);

  return (
    <div
      onClick={toggle}
    >
      {children}
    </div>
  );
}
