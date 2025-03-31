import { useState, createContext, useId } from 'react';

const ToggleContext = createContext();

export default function ToggleProvider({ children }) {
    const [on, setOn] = useState(false);
    const menuId = useId();

  function toggle() {
    setOn((prevOn) => !prevOn);
    }
    
    return (
        <ToggleContext.Provider value={{on, toggle, menuId}}>
            { children }
       </ToggleContext.Provider>
    )
}
export { ToggleContext };
