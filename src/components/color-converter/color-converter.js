import React from 'react';
import PropTypes from 'prop-types';
import IsValidHexColor from '../../shared/color-validator';


function ColorConverter({ color }) {

  const toRGB = (color) => {
    if (!color) {
      return '';
    }

    if (!IsValidHexColor(color)) {
      return 'Ошибка!';
    }

    if (color.length === 4) {
      const red = parseInt(color.substring(1, 2) + color.substring(1, 2), 16);
      const green = parseInt(color.substring(2, 3) + color.substring(2, 3), 16);
      const blue = parseInt(color.substring(3, 4) + color.substring(3, 4), 16);
      return `rgb(${red}, ${green}, ${blue})`;
    }
    
    const red = parseInt(color.substring(1, 3), 16);
    const green = parseInt(color.substring(3, 5), 16);
    const blue = parseInt(color.substring(5, 7), 16);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  return <div className='color-block color-value'>{toRGB(color)}</div>;
}

ColorConverter.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorConverter;