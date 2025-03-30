import { useContext } from 'react';
import { MenuContext } from '../../contexts/MenuProvider';

export default function MenuDropdown({ children }) {
  const open = useContext(MenuContext);
  return open.toggle ? (
    <div className="menu-dropdown">{children}</div>
  ) : null;
}