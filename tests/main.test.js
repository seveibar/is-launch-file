import { execSync } from "child_process"
import { dirname } from "path"
import { fileURLToPath } from "url"
import test from "ava"

console.log(dirname(fileURLToPath(import.meta.url)))

test("files should know if they're called directly", (t) => {
	const output = execSync(`node call-me-directly.js`, {
		shell: true,
		cwd: dirname(fileURLToPath(import.meta.url)),
	})
		.toString()
		.trim()
	t.is(output, "only-imported.js: false\ncall-me-directly.js: true")
})
