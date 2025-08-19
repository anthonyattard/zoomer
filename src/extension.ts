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

  const zoomReset = vscode.commands.registerCommand("zoomer.zoomReset", () => {
    // Reset zoom level to default (0)
    vscode.workspace
      .getConfiguration("")
      .update("window.zoomLevel", 0, true);
  });

  context.subscriptions.push(zoomIns);
  context.subscriptions.push(zoomOuts);
  context.subscriptions.push(zoomReset);
}

export function deactivate() {}
