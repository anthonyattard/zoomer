# Zoomer

A VSCode extension which allows for finely tuned zoom levels.

## Motivation

I built this since I was frustrated with not being able to get the perfect text size; too big, too small, ugh. So I built this.

## Demo

![demo](https://raw.githubusercontent.com/anthonyattard/zoomer/master/img/zoomer-demo.gif)

## Usage

### Keybindings

Zoom In:

- Mac `Command` + `=`
- Windows `Control` + `=`
- Linux `Control` + `=`

Zoom Out:

- Mac `Command` + `-`
- Windows `Control` + `-`
- Linux `Control` + `-`

Also works with numpad.

Zoom In:

- Mac `Command` + `numpad_add`
- Windows `Control` + `numpad_add`
- Linux `Control` + `numpad_add`

Zoom Out:

- Mac `Command` + `numpad_subtract`
- Windows `Control` + `numpad_subtract`
- Linux `Control` + `numpad_subtract`

### Settings

Head to Zoomer settings in Code and set your custom zoom factor!

![settings](https://raw.githubusercontent.com/anthonyattard/zoomer/master/img/zoomer-settings.png)

### Publishing

- To build vsix (local only): `pnpx @vscode/vsce package`

- To Publish:
  - Major `pnpx @vscode/vsce publish major`
  - Minor `pnpx @vscode/vsce publish minor`
  - Patch `pnpx @vscode/vsce publish patch`
