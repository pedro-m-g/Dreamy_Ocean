[English version](README.en.md)

# 🌌 Dreamy Ocean

**Dreamy Ocean** es un tema para REAPER, inspirado en un sueño en el que exploraba sonidos dentro del DAW.
Pero en lugar de verse como siempre, con el tema predeterminado, todo parecía cobrar vida.

El fondo se sentía como el tejido del universo.
Las pistas brillaban como cristal.
Las ondas de sonido dejaban estelas como cometas.

Este tema es mi intento de llevar esa visión onírica —ligera pero inmersiva— del sueño a la realidad.
Espero que logre compartir al menos una parte de esa experiencia, y que te inspire a soñar con tus propias creaciones.

---

## 📁 Estructura del proyecto

- `Dreamy_Ocean_resources/` - Carpeta con los recursos gráficos del tema.
- `Dreamy_Ocean.ReaperTheme` - Archivo de configuración del tema.
- `preview.png` - Imagen de vista previa.
- `theme.json` - Metadatos del proyecto.

---

## 🛠 Instalación

1. Descarga este repositorio como archivo `.zip`.
2. **No lo descomprimas.** Cámbiale la extensión de `.zip` a `.ReaperThemeZip`.
3. Mueve el archivo a la carpeta de temas de REAPER:

   ```text
   Windows: %APPDATA%\REAPER\ColorThemes
   macOS:   ~/Library/Application Support/REAPER/ColorThemes
   Linux:   ~/.config/REAPER/ColorThemes
   ```

4. Abre REAPER y selecciona:
   `Opciones → Temas → Dreamy_Ocean`

## Preparación para desarrollo

El proyecto utiliza Node.js 22 o más reciente, así que necesitarás el siguiente comando para instalar dependencias:

```sh
npm install
```

## Construir tema para REAPER

Ejecuta el siguiente comando para generar un archivo que REAPER reconozca como un nuevo tema:

```sh
npm run build
```

El archivo generado `Dreamy_Ocean.ReaperThemeZip` se guardará en la carpeta `build/`; puedes abrirlo directamente con REAPER para ver una vista previa del tema.
