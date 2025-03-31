
import { useState, createContext, useId } from 'react';

const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [toggle, setToggle] = useState(false);
  const menuId = useId();
  const setToggleState = () => {
    setToggle(prev => !prev);
  }
  return (
    <MenuContext.Provider value={{ toggle, setToggleState, menuId }}>
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContext };