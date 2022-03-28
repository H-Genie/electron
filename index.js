const { app, BrowserWindow, Menu } = require('electron');

const createWindow = () => {
    const window = new BrowserWindow({
        width: 900,
        height: 600
    });
    window.loadFile("index.html");

    const template = [
        {
            label: "Netflix",
            submenu: [
                { role: "about" },
                { type: "separator" },
                { role: "quit" }
            ]
        },
        {
            label: "Preferences",
            submenu: [
                {
                    label: "New Background",
                    click: () => {
                        window.webContents.executeJavaScript(``)
                    }
                },
                { type: "separator" },
                {
                    label: "Reset Preferences",
                    click: () => {
                        window.webContents.executeJavaScript(``)
                    }
                }
            ]
        }
    ]

    const customMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(customMenu)
}

app.whenReady().then(() => {
    createWindow()
})