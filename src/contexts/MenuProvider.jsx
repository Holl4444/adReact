
import { useState, createContext } from 'react';

const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [toggle, setToggle] = useState(false)
  const setToggleState = () => {
    setToggle(prev => !prev);
  }
  return (
    <MenuContext.Provider value={{ toggle, setToggleState }}>
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContext };