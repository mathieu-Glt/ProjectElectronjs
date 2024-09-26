const { BrowserWindow } = require('electron');
const path = require('node:path');

function createModal(parentWindow) {
  const child = new BrowserWindow({
    parent: parentWindow,
    modal: true,
    show: false,
    width: 400,
    height: 300,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // Si tu as besoin de preload
    }
  });

  child.loadFile('modal.html'); // Fichier HTML pour afficher l'erreur

  child.once('ready-to-show', () => {
    child.show();
  });
}

module.exports = { createModal };
