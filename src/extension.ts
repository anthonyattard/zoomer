import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log("Zoomer Activated");

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

  context.subscriptions.push(zoomIns);
  context.subscriptions.push(zoomOuts);
}

export function deactivate() {}
