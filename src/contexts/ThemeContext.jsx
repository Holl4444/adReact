import React from 'react';

export default function ThemeContext({ children }) {
    return (
        <ThemeContext.Provider value="dark">
            { children }
        </ThemeContext.Provider>
    )
}