import { useContext } from 'react';
import Button from '../Button/Button';
import Toggle from '../Toggle/index';
import { ToggleContext } from '../../contexts/ToggleContext';

export default function MenuButton({ children }) {
    const { on, menuId } = useContext(ToggleContext);
    // Aria-expanded for SR accessibility. Haspopup says there is a hidden menu.
    return (
      <Toggle.Button>
        <Button
          aria-expanded={on}
          aria-haspopup="true"
          aria-controls={menuId}
        >
          {children}
        </Button>
      </Toggle.Button>
    );
}
