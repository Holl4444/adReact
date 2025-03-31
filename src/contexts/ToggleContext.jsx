import { useState, createContext, useEffect, useId } from 'react';

const ToggleContext = createContext();

export default function ToggleProvider({ children, onToggle }) {
    const [on, setOn] = useState(false);
    const menuId = useId();

  function toggle() {
    setOn((prevOn) => !prevOn);
    }

    useEffect(() => {
        if (onToggle) {
            onToggle();
        }
        }, [on, onToggle]);
    
    
    return (
        <ToggleContext.Provider value={{on, toggle, menuId}}>
            { children }
       </ToggleContext.Provider>
    )
}
export { ToggleContext };
