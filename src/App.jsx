import Menu from './components/Menu/Menu';
import MenuButton from './components/Menu/MenuButton';
import MenuDropdown from './components/Menu/MenuDropdown';
import MenuItem from './components/Menu/MenuItem';
import MenuProvider from './contexts/MenuProvider';

// Separated concerns by adding context folder (fast refresh);
export default function App() {
  const sports = ['Tennis', 'Pickleball', 'Racquetball', 'Squash'];

  return (
    <MenuProvider>
      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown>
          {sports.map((sport) => (
            <MenuItem key={sport}>{sport}</MenuItem>
          ))}
        </MenuDropdown>
      </Menu>
    </MenuProvider>
  );
}
