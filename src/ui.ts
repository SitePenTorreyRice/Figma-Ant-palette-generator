import './ui.css'

document.getElementById('create').onclick = () => {
  const primaryColorTextbox = document.getElementById('color') as HTMLInputElement;
  const darkBgTextbox = document.getElementById('darkBg') as HTMLInputElement;
  const nameTextbox = document.getElementById('name') as HTMLInputElement;
  const primaryHex = primaryColorTextbox.value;
  const darkBgHex = darkBgTextbox.value;
  const paletteName = nameTextbox.value;
  parent.postMessage({ pluginMessage: { type: 'generate', primaryHex, darkBgHex, paletteName } }, '*')
}

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}
