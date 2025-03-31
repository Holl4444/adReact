import { Menu, MenuButton, MenuDropdown, MenuItem } from './components/Menu';
import ToggleProvider from './contexts/ToggleContext';
import Toggle from './components/Toggle/index';

// Separated concerns by adding context folder (fast refresh);
export default function App() {
  const categories = ['Home', 'About', 'Contact', 'Blog'];

  return (
    <ToggleProvider>
      <Toggle>
        <Menu>
          <Toggle.Button>
            <MenuButton>Menu</MenuButton>
          </Toggle.Button>
          <Toggle.On>
            <MenuDropdown>
              {categories.map((item) => (
                <MenuItem key={item}>{item}</MenuItem>
              ))}
            </MenuDropdown>
          </Toggle.On>
        </Menu>
      </Toggle>
    </ToggleProvider>
  );
}
