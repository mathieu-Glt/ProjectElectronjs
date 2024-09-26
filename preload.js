const { contextBridge, ipcRenderer } = require('electron')

// Exposer une API sécurisée pour envoyer des mesages IPC
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // we can also expose variables, not just functions
  //   http: () => process.versions.http_parser,
  ping: () => ipcRenderer.invoke('ping'),
  // Fonction pour ouvrir la modale via un message IPC
  openModal: () => {
    console.log('openModal called from renderer process');
    ipcRenderer.send('open-modal')
  }

})