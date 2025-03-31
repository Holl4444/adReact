import {
  Menu,
  MenuButton,
  MenuDropdown,
  MenuItem,
} from './components/Menu';
import Star from './components/Star/Star';

// Separated concerns by adding context folder (fast refresh);
export default function App() {
  const categories = ['Home', 'About', 'Contact', 'Blog'];

  return (
    <>
      <Star />

      <Menu>
          <MenuButton>Menu</MenuButton>
            <MenuDropdown>
            {categories.map((item) => (
              <MenuItem key={item}>{item}</MenuItem>
            ))}
          </MenuDropdown>
      </Menu>
    </>
  );
}
