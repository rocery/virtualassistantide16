const { app, BrowserWindow } = require("electron");
const url = require("url");
var path = require('path')

let win = null

function boot() {
    const win = new BrowserWindow({ 
        width: 1366, 
        height: 768,
        minWidth: 1270,
        minHeight: 720, 
        fullscreenable: true,
        icon: path.join(__dirname, 'build/icon.ico')
        // icon: 'img/logo_idx_merah.jpg' 
    })
    win.setMenuBarVisibility(false)
    win.loadURL(`file://${__dirname}/index.html`)
    // win.loadURL(`idexpress.com`)
}
app.on("ready", boot);
