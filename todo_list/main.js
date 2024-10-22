const {app, BrowserWindow} = require('electron');
const{path} = require('path');

function CreateWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,//reducing the risk of attacks 
            //preventing potential malicious scripts from accessing your Node.js environment directly.
            enableRemoteModule: false //allows the renderer process to call functions in the main process directly. 
        }
    });
    win.loadFile('index.html');
}
app.whenReady().then(CreateWindow);
app.on('window-all-closed', () =>{
    if(process.platform != 'darwin') app.quit();
});
app.on('activate',() => {
    if(BrowserWindow.getAllWindows().length === 0){
        CreateWindow();
    }
});