import isLaunchFile from "../index.js"

console.log("only-imported.js:", isLaunchFile(import.meta.url))
