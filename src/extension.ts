// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "zoomer" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("zoomer.helloWorld", () => {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    vscode.window.showInformationMessage("Hello from zoomer!");
  });


  let zoomIns = vscode.commands.registerCommand("zoomer.zoomIns", () => {
    // vscode.window.showInformationMessage("zoomIns");
    const customLevel: any = vscode.workspace
      .getConfiguration("")
      .get("zoomer.zoomIncrement");

    const zoomLevel: any = vscode.workspace
      .getConfiguration("")
      .get("window.zoomLevel");

    const total = zoomLevel + customLevel;
    vscode.workspace
      .getConfiguration("")
      .update("window.zoomLevel", parseFloat(total.toFixed(2)), true);

  });

  const zoomOuts = vscode.commands.registerCommand("zoomer.zoomOuts", () => {
    // vscode.window.showInformationMessage("zoomOuts");

    const customLevel: any = vscode.workspace
      .getConfiguration("")
      .get("zoomer.zoomIncrement");
    const zoomLevel: any = vscode.workspace
      .getConfiguration("")
      .get("window.zoomLevel");
    const total = zoomLevel - customLevel;
    vscode.workspace
      .getConfiguration("")
      .update("window.zoomLevel", parseFloat(total.toFixed(2)), true);
  });

  context.subscriptions.push(disposable);
  context.subscriptions.push(zoomIns);
  context.subscriptions.push(zoomOuts);
}

// this method is called when your extension is deactivated
export function deactivate() {}
