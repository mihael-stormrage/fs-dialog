import { execSync } from "child_process"
import os from "os"
import iconv from "iconv-lite"

let OS = os.platform();

export function folder(prompt) {
  let path;

  if (OS == "win32")
    path = iconv.decode(execSync(`(new-object -COM 'Shell.Application').BrowseForFolder(0,'${prompt}',529,0).self.path`, { shell: "powershell" }), "cp866")

  else if (OS == "linux")
    path = execSync(`zenity --file-selection --directory --title "${prompt}"`).toString()

  else if (OS == "darwin")
    path = execSync(`osascript -e 'POSIX path of (choose folder with prompt "${prompt}" with showing package contents)'`).toString()

  path.trim();
  return path;
}

export function file(prompt) {
  let path;

  if (OS == "win32")
    path = iconv.decode(execSync(`.\\chooser.ps1 -title "${prompt}"`, { shell: "powershell" }), "cp866")

  else if (OS == "linux")
    path = execSync(`zenity --file-selection --title "${prompt}"`)

  else if (OS == "darwin")
    path = execSync(`osascript -e 'POSIX path of (choose file with prompt "${prompt}")'`)

  path.trim();
  return path;
}

// let prompt = "Select _Data folder.";

// console.log(file(prompt));