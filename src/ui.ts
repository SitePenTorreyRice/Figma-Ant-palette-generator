import './ui.css'

document.getElementById('create').onclick = () => {
  const textbox = document.getElementById('color') as HTMLInputElement
  const hex = textbox.value;
  parent.postMessage({ pluginMessage: { type: 'color-value', hex } }, '*')
}

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}
