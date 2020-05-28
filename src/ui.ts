import './ui.css'

document.getElementById('create').onclick = () => {
  const primaryColorTextbox = document.getElementById('color') as HTMLInputElement
  const darkBgTextbox = document.getElementById('darkBg') as HTMLInputElement
  const primaryHex = primaryColorTextbox.value;
  const darkBgHex = darkBgTextbox.value;
  parent.postMessage({ pluginMessage: { type: 'generate', primaryHex, darkBgHex } }, '*')
}

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}
