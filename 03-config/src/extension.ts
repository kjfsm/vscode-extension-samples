import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("03-config.loadConfig", () => {
      vscode.window.showInformationMessage("Hello World from 03-config!");
    })
  );
}

export function deactivate() {}
