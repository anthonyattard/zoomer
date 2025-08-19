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

Reset Zoom:

- Mac `Command` + `0`
- Windows `Control` + `0`
- Linux `Control` + `0`

Also works with numpad.

Zoom In:

- Mac `Command` + `numpad_add`
- Windows `Control` + `numpad_add`
- Linux `Control` + `numpad_add`

Zoom Out:

- Mac `Command` + `numpad_subtract`
- Windows `Control` + `numpad_subtract`
- Linux `Control` + `numpad_subtract`

Reset Zoom:

- Mac `Command` + `numpad0`
- Windows `Control` + `numpad0`
- Linux `Control` + `numpad0`

### Settings

Head to Zoomer settings in Code and set your custom zoom factor!

![settings](https://raw.githubusercontent.com/anthonyattard/zoomer/master/img/zoomer-settings.png)

### Publishing

- To build vsix (local only): `pnpm dlx @vscode/vsce package`

- To Publish:
  - Major `pnpm dlx @vscode/vsce publish major`
  - Minor `pnpm dlx @vscode/vsce publish minor`
  - Patch `pnpm dlx @vscode/vsce publish patch`