figma.showUI(__html__, {height: 400})
import { generate, presetPalettes } from '../node_modules/@ant-design/colors/lib/index';
import tinycolor from "../node_modules/tinycolor2/tinycolor";

// Generate color palettes by a given color

const rectSize = {
  "width": 300,
  "height": 48
}

function formatRgb(color) {
  let clr = tinycolor(color);
  return {
    r: clr._r / 255,
    g: clr._g / 255,
    b: clr._b / 255
  }
}

function createColorBlocks(primaryColor:string, darkBgColor:string, paletteName:string) {
  let colorsLight = generate(primaryColor);
  let colorsDark = generate(primaryColor, {
    theme: 'dark',
    backgroundColor: darkBgColor
  }
);

const colorSets = [colorsLight, colorsDark];
  colorSets.forEach(function(colors, idx){
    const nodes = []
    let baseName = "Light";

    for (let i = 0; i < colors.length; i++) {
      const rect = figma.createRectangle();
      rect.resize(rectSize.width, rectSize.height);
      rect.y = i * rectSize.height;
      if(idx > 0) {
        rect.x = rectSize.width + 48;
        baseName = "Dark";
      }
      rect.fills = [{type: 'SOLID', color: formatRgb(colors[i])}];
      rect.name = baseName + "/" + paletteName + "/" + (i+1);
      const figmaStyle = figma.createPaintStyle()
      figmaStyle.name = rect.name;
      figmaStyle.paints = rect.fills;
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
      figma.currentPage.selection = nodes;
      figma.viewport.scrollAndZoomIntoView(nodes);
    }
  });
}


figma.ui.onmessage = msg => {
  if (msg.type === 'generate') {
    createColorBlocks(msg.primaryHex, msg.darkBgHex, msg.paletteName);
  }

  figma.closePlugin()
}
