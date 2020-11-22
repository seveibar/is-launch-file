import { fileURLToPath } from "url"
import path from "path"

export function isLaunchFile(metaUrl) {
	if (!metaUrl) {
		throw new Error(
			"Incorrect usage of isLaunchFile. Use isLaunchFile(import.meta.url)"
		)
	}
	const launchFilePath = process.argv[1]
	const moduleFilePath = fileURLToPath(metaUrl)
	return moduleFilePath === launchFilePath
}

export default isLaunchFile
