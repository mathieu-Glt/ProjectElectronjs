const { app, BrowserWindow, ipcMain} = require('electron/main');
const path = require('node:path');
const { createModal } = require('./modal');

const createWindow = () => {
  const win = new BrowserWindow({
    backgroundColor: '#ffce33',
    width: 1000,
    height: 800,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true, // Sécurité renforcée
        nodeIntegration: false, // Désactiver l'intégration de Node.js dans le rendu
        enableRemoteModule: false,
    }
  })

  win.loadFile('index.html')
  win.webContents.openDevTools();  // À ajouter dans `main.js` temporairement


  //Ecouter l'événement IPC pour ouvrir la modale
  ipcMain.on('open-modal', () => {
    console.log('open-modal event received in main process');
    createModal(win)
  })
}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})