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

### Settings

Head to Zoomer settings in Code and set your custom zoom factor!

![settings](https://raw.githubusercontent.com/anthonyattard/zoomer/master/img/zoomer-settings.png)

### Publishing

- Ensure vsce is installed globally `npm install -g vsce`

- To build vsix (local only): `vsce package`

- To Publish:
  - Major `vsce publish major`
  - Minor `vsce publish minor`
  - Patch `vsce publish patch`
