function IsValidHexColor(color) {
  return (color.length === 7 && color.match(/#[0-9a-fA-F]{6}/)) || (color.length === 4 && color.match(/#[0-9a-fA-F]{3}/));
}

export default IsValidHexColor;