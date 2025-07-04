[Versión en Español](README.md)

# 🌌 Dreamy Ocean

**Dreamy Ocean** is a REAPER theme inspired by a dream I had—one where I was exploring sounds inside the DAW, but everything looked... alive.
The background resembled the universe itself, tracks shimmered like crystal, and waveform peaks trailed across the screen like comets.

This theme is my attempt to recreate that airy, immersive vision.
I hope it shares a fragment of that dream with you—and maybe even inspires you to create and share your own.

---

## 📁 File Structure

- `Dreamy_Ocean_resources/` - Graphic assets directory for the theme UI.
- `Dreamy_Ocean.ReaperTheme` - REAPER theme configuration file.
- `preview.png` - Visual preview of the theme.
- `theme.json` - Metadata for the project.

---

## 🛠 Installation

1. Download this repository as a `.zip` file.
2. **Do not unzip it.** Instead, rename the file extension from `.zip` to `.ReaperThemeZip`.
3. Move the file to your REAPER themes folder:

   ```text
   Windows: %APPDATA%\REAPER\ColorThemes
   macOS:   ~/Library/Application Support/REAPER/ColorThemes
   Linux:   ~/.config/REAPER/ColorThemes
   ```

4. Open REAPER and go to:
   `Options → Themes → Dreamy_Ocean`

---

## Development Setup

This project uses Node.js 22 or newer for development scripts, so you'll need to install dependencies using this command:

```sh
npm ci
```

## Build REAPER Theme

To build the REAPER theme, run:

```sh
npm run build
```

The generated file will be placed in the `build/` directory. Open it in REAPER to preview the theme.
