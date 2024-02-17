function hexToRgb(hex) {
  hex = hex.replace(/^#/, '');

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(function (char) {
        return char + char;
      })
      .join('');
  }

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

export function colorWithOpacity(hexColor, opacity) {
  const { r, g, b } = hexToRgb(hexColor);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
