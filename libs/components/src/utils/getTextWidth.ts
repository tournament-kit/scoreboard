let canvas = null;
const getCanvas = () => {
  if (!canvas) {
    canvas = document.createElement('canvas');
  }
  return canvas;
}

/**
* Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
*
* @param {String} text The text to be rendered.
* @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
*
* @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
*/
export function getTextSize(text, el) {
  const font = getCanvasFont(el);
  const context = getCanvas().getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return metrics;
}

function getCssStyle(element, prop) {
  return window.getComputedStyle(element, null).getPropertyValue(prop);
}

export function getCanvasFont(el = document.body) {
  const fontWeight = getCssStyle(el, 'font-weight') || 'normal';
  const fontSize = getCssStyle(el, 'font-size') || '16px';
  const fontFamily = getCssStyle(el, 'font-family') || 'Times New Roman';
  return `${fontWeight} ${fontSize} ${fontFamily}`;
}
