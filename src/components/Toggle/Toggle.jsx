//Headless component - functionality and no ui

import ToggleProvider from '../../contexts/ToggleContext';
export default function Toggle({ children }) {
    return (
        <ToggleProvider>{children}</ToggleProvider>
    )
}