import React, { useState, KeyboardEventHandler } from 'react';
import CreatableSelect from 'react-select/creatable';

const components = {
  DropdownIndicator: null, // Remove the dropdown indicator for a cleaner input
};

// Helper function to create new options
const createOption = (label) => ({
  label,
  value: label, 
});

const App = () => {
  const [inputValue, setInputValue] = useState(''); // Manage input value
  const [value, setValue] = useState([]); // Manage selected options

  // Handle keyboard events (Enter/Tab) to add new options
  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setValue((prev) => [...prev, createOption(inputValue)]); // Add new option
        setInputValue(''); // Clear input field
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ width: '300px', margin: '100px auto' }}>
      <h3>Creatable Multi-Select Input</h3>
      <CreatableSelect
        components={components} // Disable dropdown indicator
        inputValue={inputValue} // Controlled input value
        isClearable // Allow clearing all options
        isMulti // Enable multi-select
        menuIsOpen={false} // Prevent dropdown from opening
        onChange={(newValue) => setValue(newValue)} // Update selected options
        onInputChange={(newValue) => setInputValue(newValue)} // Update input value on typing
        onKeyDown={handleKeyDown} // Handle keypress events (Enter/Tab)
        placeholder="Type something and press enter..."
        value={value} // Selected options displayed
      />
      <div>
        <h4>Selected Values:</h4>
        <ul>
          {value.map((option, index) => (
            <li key={index}>{option.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
