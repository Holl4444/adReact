import { MenuContext } from './MenuContext';
import { useState } from 'react';

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
