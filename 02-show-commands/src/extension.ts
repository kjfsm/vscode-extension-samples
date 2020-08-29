import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "02-show-commands.showCommands",
      async () => {
        // メッセージの表示
        await vscode.window.showInformationMessage("showInformationMessage");

        // エラーメッセージの表示
        await vscode.window.showErrorMessage("showErrorMessage");

        // 警告メッセージの表示
        await vscode.window.showWarningMessage("showWarningMessage");

        // 入力欄の表示
        const a = await vscode.window.showInputBox({
          prompt: "showInputBox a",
        });

        // 入力パターンの指定
        const b = await vscode.window.showInputBox({
          prompt: "showInputBox b",
          validateInput: (input) => {
            const parsed = parseInt(input, 10);
            return !isNaN(parsed) ? "" : "数値を入力してください";
          },
        });

        // 入力結果
        await vscode.window.showInformationMessage(`a is ${a} b is ${b}`);

        // xxxの入力
        const file = await vscode.window.showOpenDialog({
          title: "showOpenDialog",
        });

        if (file === undefined) {
          await vscode.window.showWarningMessage("undefined");
        } else {
          await vscode.window.showInformationMessage(file.toString());
        }

        const pickedItem = await vscode.window.showQuickPick(
          ["a", "b", "c", "d", "e"],
          {
            placeHolder: "showQuickPick",
          }
        );

        if (pickedItem === undefined) {
          await vscode.window.showInformationMessage("showQuickPick undefined");
        } else {
          await vscode.window.showInformationMessage(
            "showQuickPick " + pickedItem
          );
        }

        const pickedItems = await vscode.window.showQuickPick(
          ["a", "b", "c", "d", "e"],
          {
            placeHolder: "showQuickPick(canPickMany)",
            canPickMany: true,
          }
        );
        if (pickedItems === undefined) {
          await vscode.window.showInformationMessage("showQuickPick undefined");
        } else {
          await vscode.window.showInformationMessage(
            "showQuickPick " + pickedItems
          );
        }

        const saveFile = await vscode.window.showSaveDialog({
          title: "showSaveDialog",
        });

        if (saveFile === undefined) {
          await vscode.window.showInformationMessage(
            "showSaveDialog undefined"
          );
        } else {
          await vscode.window.showInformationMessage(
            "showSaveDialog " + saveFile.toString()
          );
        }

        // 使い方わかってない
        // vscode.window.showTextDocument();

        // 使い方わかってない
        // const folder = await vscode.window.showWorkspaceFolderPick({
        //   placeHolder: "showWorkspaceFolderPick",
        // });

        // if (folder === undefined) {
        //   await vscode.window.showInformationMessage(
        //     "showWorkspaceFolderPick undefined"
        //   );
        // } else {
        //   await vscode.window.showInformationMessage(
        //     "showWorkspaceFolderPick " + folder
        //   );
        // }
      }
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
