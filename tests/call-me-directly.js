import isLaunchFile from "../index.js"
import "./only-imported.js"

console.log("call-me-directly.js:", isLaunchFile(import.meta.url))
