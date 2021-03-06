/* eslint-disable @typescript-eslint/no-var-requires */
// Forge Configuration
const path = require('path')
const rootDir = process.cwd()
const version = process.env.npm_package_version

module.exports = {
  // Packager Config
  packagerConfig: {
    // Create asar archive for main, renderer process files
    asar: true,
    extraResource: [
      path.join(rootDir, `resources/fyrlykt-core${process.platform === 'win32' ? '.exe' : ''}`),
      path.join(rootDir, 'resources/loupedeck.config.json'),
      path.join(rootDir, 'resources/resolve.config.json'),
      path.join(rootDir, 'resources/DaVinci Resolve.txt'),
      path.join(rootDir, 'icons/icon.ico')
    ],
    icon: path.join(rootDir, 'icons/icon.ico')
  },
  // Forge Makers
  makers: [
    {
      // Squirrel.Windows is a no-prompt, no-hassle, no-admin method of installing
      // Windows applications and is therefore the most user friendly you can get.
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'electron-react-typescript-webpack-2021',
        iconUrl: path.join(rootDir, 'icons/icon.ico'),
        setupIcon: path.join(rootDir, 'icons/icon.ico'),
        setupExe: `fyrlykt_${version}_win.exe`
      },
    },
    {
      // The Zip target builds basic .zip files containing your packaged application.
      // There are no platform specific dependencies for using this maker and it will run on any platform.
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      // The deb target builds .deb packages, which are the standard package format for Debian-based
      // Linux distributions such as Ubuntu.
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      // The RPM target builds .rpm files, which is the standard package format for
      // RedHat-based Linux distributions such as Fedora.
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  // Forge Plugins
  plugins: [
    [
      // The Webpack plugin allows you to use standard Webpack tooling to compile both your main process code
      // and your renderer process code, with built in support for Hot Module Reloading in the renderer
      // process and support for multiple renderers.
      '@electron-forge/plugin-webpack',
      {
        // Main process webpack configuration
        mainConfig: path.join(rootDir, 'tools/webpack/webpack.main.js'),
        // Renderer process webpack configuration
        renderer: {
          // Configuration file path
          config: path.join(rootDir, 'tools/webpack/webpack.renderer.js'),
          // Entrypoints of the application
          entryPoints: [
            {
              // React Hot Module Replacement (HMR)
              rhmr: 'react-hot-loader/patch',
              // HTML index file template
              html: path.join(rootDir, 'src/index.html'),
              // Renderer
              js: path.join(rootDir, 'src/renderer.ts'),
              // Main Window
              name: 'main_window',
              // Preload
              preload: {
                js: path.join(rootDir, 'src/preload.ts'),
              },
            },
          ],
        },
      },
    ],
  ],
};
