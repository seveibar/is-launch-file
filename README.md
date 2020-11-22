# isLaunchFile: Determine if a file was called directly with NodeJS Modules

Determine if a file was called directly with NodeJS Modules.

In NodeJS packages with `"type": "module"`, the `module` and `require` keywords are undefined, so you can't use the old method of `if (!module.parent)`. `isLaunchFile`
uses `import.meta.url` and `process.argv[0]` to determine if a file was called directly.

## Installation

```bash
npm install --save is-launch-file
```

## Usage

```javascript
import isLaunchFile from "is-launch-file"

if (isLaunchFile(import.meta.url)) {
	// This file was called directly.
}
```

## Example

```javascript
// ------------------------
// call-me-directly.js
// ------------------------
import isLaunchFile from "../index.js"
import "./only-imported.js"

console.log("call-me-directly.js:", isLaunchFile(import.meta.url))

// ------------------------
// only-imported.js
// ------------------------
import isLaunchFile from "../index.js"

console.log("only-imported.js:", isLaunchFile(import.meta.url))
```

If you execute `node call-me-directly.js`, you'll get the
following output:

```
call-me-directly.js: true
only-imported.js: false
```
