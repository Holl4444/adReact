import Toggle from '../Toggle/index';

export default function MenuDropdown({ children }) {
  // When open is false ariaHidden is true (the opposite). Not actually necessary here as the div only gets added when toggle is true but good to have  for my learning.
  return (
    <Toggle.On>
      <div className="menu-dropdown">
        {children}
      </div>
    </Toggle.On>
  );
}