import { isCancel, outro } from "@clack/prompts"
import { styleText } from "util"
import { contentCacheFolder } from "./constants.js"
import { spawnSync } from "child_process"
import fs from "fs"

async function robustRemove(target) {
  const maxRetries = 5
  const delayMs = 500
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      await fs.promises.rm(target, { force: true, recursive: true })
      return
    } catch (err) {
      // On Windows, directories can be locked by other processes leading to EBUSY/EPERM
      const code = err?.code
      const isWindows = process.platform === "win32"
      const retriable = code === "EBUSY" || code === "EPERM" || code === "EACCES"
      if (!isWindows || !retriable || attempt === maxRetries) {
        throw err
      }
      await new Promise((res) => setTimeout(res, delayMs))
    }
  }
}

export function escapePath(fp) {
  return fp
    .replace(/\\ /g, " ") // unescape spaces
    .replace(/^"(.*)"$/, "$1")
    .replace(/^'(.*)'$/, "$1")
    .trim()
}

export function exitIfCancel(val) {
  if (isCancel(val)) {
    outro(styleText("red", "Exiting"))
    process.exit(0)
  } else {
    return val
  }
}

export async function stashContentFolder(contentFolder) {
  await robustRemove(contentCacheFolder)
  await fs.promises.cp(contentFolder, contentCacheFolder, {
    force: true,
    recursive: true,
    verbatimSymlinks: true,
    preserveTimestamps: true,
  })
  try {
    await robustRemove(contentFolder)
  } catch (err) {
    // If we fail to remove the content folder due to Windows file locks, continue.
    // Subsequent copy operations will merge and overwrite as needed.
  }
}

export function gitPull(origin, branch) {
  const flags = ["--no-rebase", "--autostash", "-s", "recursive", "-X", "ours", "--no-edit"]
  const out = spawnSync("git", ["pull", ...flags, origin, branch], { stdio: "inherit" })
  if (out.stderr) {
    throw new Error(styleText("red", `Error while pulling updates: ${out.stderr}`))
  } else if (out.status !== 0) {
    throw new Error(styleText("red", "Error while pulling updates"))
  }
}

export async function popContentFolder(contentFolder) {
  try {
    await robustRemove(contentFolder)
  } catch (err) {
    // If removal fails due to transient locks, proceed with copy to refresh contents.
  }
  await fs.promises.cp(contentCacheFolder, contentFolder, {
    force: true,
    recursive: true,
    verbatimSymlinks: true,
    preserveTimestamps: true,
  })
  await robustRemove(contentCacheFolder)
}
