import { useContext } from 'react';
import Button from '../Button/Button';
import { MenuContext } from '../../contexts/MenuProvider';

export default function MenuButton({ children }) {
    const context = useContext(MenuContext);
    return <Button onClick={context.setToggleState}>{children}</Button>;
}
