import './App.css';
import { useState } from 'react';
import ColorConverter from './components/color-converter/color-converter';
import ColorInput from './components/color-input/color-input';
import IsValidHexColor from './shared/color-validator';
import { Constants } from './shared/constants';

function App() {
  const [color, setColor] = useState('');

  const onColorChanged = (value) => {
    setColor(value);
    const background = IsValidHexColor(value) ? value : Constants.ErrorColor;
    document.getElementsByTagName('body')[0].style.backgroundColor = background;
  }

  return (
    <div className='container'>
      <ColorInput onColorChanged={onColorChanged} />
      <ColorConverter color={color} />
    </div>
  );
}

export default App;
