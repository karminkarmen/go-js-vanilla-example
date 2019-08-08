(() => {
  window.onload = () => {
    DiagramManager.init();
    PaletteManager.init();
    registerButtons();
  }

  const registerButtons = () => {
    document.querySelector('.save').onclick = () => { StorageManager.save() }
    document.querySelector('.load').onclick = () => { StorageManager.load() }
    document.querySelector('.undo').onclick = () => { DiagramManager.undo() }
    document.querySelector('.redo').onclick = () => { DiagramManager.redo() }
    document.querySelector('.save-jpg').onclick = () => { DiagramManager.saveAsImg() }
  }
})();