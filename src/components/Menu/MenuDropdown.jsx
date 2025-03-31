import { useContext } from 'react';
import { MenuContext } from '../../contexts/MenuProvider';

export default function MenuDropdown({ children }) {
  const { open, toggle, menuId } = useContext(MenuContext);
  // When open is false ariaHidden is true (the opposite). Not actually necessary here as the div only gets added when toggle is true but good to have  for my learning.
  return toggle ? (
    <div className="menu-dropdown" aria-hidden={ !open } id={menuId}>{children}</div>
  ) : null;
}