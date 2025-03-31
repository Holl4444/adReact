// Allow importing all Menu elements in one line

import Menu from './Menu';
import MenuButton from './MenuButton';
import MenuDropdown from './MenuDropdown';
import MenuItem from './MenuItem';

// This or individually like Menu.Dropdown = Menu the export default Menu;
//That way would have to call Menu.Dropdown etc each time though
export { Menu, MenuButton, MenuDropdown, MenuItem }
