figma.showUI(__html__)
import { generate, presetPalettes } from '../node_modules/@ant-design/colors/lib/index';
import tinycolor from "../node_modules/tinycolor2/tinycolor";

// Generate color palettes by a given color

function formatRgb(color) {
  let clr = tinycolor(color);
  return {
    r: clr._r / 255,
    g: clr._g / 255,
    b: clr._b / 255
  }
}

function createColorBlocks(primaryColor:string) {
  console.log(primaryColor);
  let colorsLight = generate(primaryColor);
  console.log(colorsLight);
  let colorsDark = generate(primaryColor, {
    theme: 'dark',
    backgroundColor: '#141414'
  });

colorsDark.reverse();

const colorSets = [colorsLight, colorsDark];
  colorSets.forEach(function(colors, idx){
    const nodes = []
    for (let i = 0; i < colors.length; i++) {
      const rect = figma.createRectangle()
      rect.x = i * 128
      if(idx > 0) {
        rect.y = 152;
      }
      //rect.fills = [{type: 'SOLID', color: {r:1, g:1, b: 1 }}]
      rect.fills = [{type: 'SOLID', color: formatRgb(colors[i])}]
      figma.currentPage.appendChild(rect)
      nodes.push(rect)
      figma.currentPage.selection = nodes
      figma.viewport.scrollAndZoomIntoView(nodes)
    }
  });
}


figma.ui.onmessage = msg => {
  if (msg.type === 'color-value') {
    createColorBlocks(msg.hex);
  }

  figma.closePlugin()
}
