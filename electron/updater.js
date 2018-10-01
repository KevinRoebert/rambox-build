const {app, ipcMain} = require('electron');
const { autoUpdater } = require("electron-updater");
const path = require('path');

autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"
const initialize = (window) => {
	const webContents = window.webContents;
	const send = webContents.send.bind(window.webContents);
	autoUpdater.on('checking-for-update', (event) => send('autoUpdater:checking-for-update'));
	autoUpdater.on('update-available', (event, ...args) => send('autoUpdater:update-available', event, ...args));
	autoUpdater.on('update-not-available', (event, ...args) => send('autoUpdater:update-not-available', event, ...args));
	autoUpdater.on('update-downloaded', (event, ...args) => send('autoUpdater:update-downloaded', event, ...args));
	ipcMain.on('autoUpdater:quit-and-install', (event) => autoUpdater.quitAndInstall());
	ipcMain.on('autoUpdater:check-for-updates', (event) => autoUpdater.checkForUpdates());
};

module.exports = {initialize};
