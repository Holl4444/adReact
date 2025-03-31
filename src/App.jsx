import { Menu, MenuButton, MenuDropdown, MenuItem } from './components/Menu';
import ToggleProvider from './contexts/ToggleContext';
import Toggle from './components/Toggle/index';

// Separated concerns by adding context folder (fast refresh);
export default function App() {
  const sports = ['Tennis', 'Pickleball', 'Racquetball', 'Squash'];

  return (
    <ToggleProvider>
      <Toggle>
        <Menu>
          <Toggle.Button>
            <MenuButton>Sports</MenuButton>
          </Toggle.Button>
          <Toggle.On>
            <MenuDropdown>
              {sports.map((sport) => (
                <MenuItem key={sport}>{sport}</MenuItem>
              ))}
            </MenuDropdown>
          </Toggle.On>
        </Menu>
      </Toggle>
    </ToggleProvider>
  );
}
