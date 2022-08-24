import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ColorInput(props) {
  const [color, setColor] = useState('');

  const isInputCompleted = (value) => {
    return value && (value.length === 7 || value.length === 4);
  }

  const onColorChanged = (e) => {
    setColor(e.target.value);
    if (isInputCompleted(e.target.value)) {
      props.onColorChanged(e.target.value);
    }
  }
  
  return <input className='color-block color-input' type='text' value={color} onChange={onColorChanged} />;
}

ColorInput.propTypes = {
  onColorChanged: PropTypes.func.isRequired
};

export default ColorInput;