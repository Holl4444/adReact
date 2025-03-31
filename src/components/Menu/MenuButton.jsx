import { useContext } from 'react';
import Button from '../Button/Button';
import { MenuContext } from '../../contexts/MenuProvider';

export default function MenuButton({ children }) {
    const { setToggleState, open, menuId } = useContext(MenuContext);
    // Aria-expanded for SR accessibility. Haspopup says there is a hidden menu.
    return <Button onClick={setToggleState} aria-expanded={open} aria-haspopup='true' aria-controls={menuId}>{children}</Button>;
}
