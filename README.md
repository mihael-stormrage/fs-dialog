# fs-dialog
![platform]
[![npm version][npm-badge]][npm-url]
[![Dependency Status][david-badge]][david-url]

Native crossplatform filesystem dialogs support for Node.js (synchronous).

## Install

```sh
npm i fs-dialog
```

## Usage

```js
import dialog from "fs-dialog"
```

Open dialog with specified title:
```js
dialog.folder(title); //or
dialog.file(title);
```
Returns string path to file or folder.

[npm-badge]: https://badge.fury.io/js/fs-dialog.svg
[npm-url]: https://badge.fury.io/js/fs-dialog
[david-badge]: https://david-dm.org/mihael-stormrage/fs-dialog.svg
[david-url]: https://david-dm.org/mihael-stormrage/fs-dialog
[platform]: https://img.shields.io/badge/platform-windows%20%7C%20macos%20%7C%20linux-informational
