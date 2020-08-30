import * as vscode from "vscode";

export const activate = (context: vscode.ExtensionContext) => {
  context.subscriptions.push(
    vscode.commands.registerCommand("03-config.loadConfig", async () => {
      const configuration = vscode.workspace.getConfiguration("config");

      const get = (section: string): string => {
        const value = configuration.get(section);
        if (value === undefined) {
          return "undefined";
        }
        switch (typeof value) {
          case "string":
            return "string " + value;
          case "boolean":
            return "boolean " + value;
          default:
            return "unknown";
        }
      };

      vscode.window.showInformationMessage(get("string"));
      vscode.window.showInformationMessage(get("boolean"));
      vscode.window.showInformationMessage(get("object"));
    })
  );
};

export function deactivate() {}
