//Headless component - functionality and no ui

import ToggleProvider from '../../contexts/ToggleContext';

export default function Toggle({ children, onToggle }) {

    return (
        <ToggleProvider onToggle={onToggle}>{children}</ToggleProvider>
    )
}