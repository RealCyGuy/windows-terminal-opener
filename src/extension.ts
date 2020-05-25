import * as vscode from 'vscode';
const { exec } = require('child_process');

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('windows-terminal-opener.openWindowsTerminal', () => {
		let folders = vscode.workspace.workspaceFolders;
		if (Array.isArray(folders) && folders.length) {
			const wt = exec('wt -d "' + folders[0]["uri"]["fsPath"] + '"');
		} else {
			const wt = exec('wt');
		}
	});

	context.subscriptions.push(disposable);
}
export function deactivate() { }
