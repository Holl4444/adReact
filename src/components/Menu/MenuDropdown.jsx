import { useContext } from 'react';
import { MenuContext } from '../../contexts/MenuContext';

export default function MenuDropdown({ children }) {
  const open = useContext(MenuContext);
  return open.toggle ? (
    <div className="menu-dropdown">{children}</div>
  ) : null;
}