# Fyrlykt
An app to connect Loupedeck+ & DaVinci Resolve 17

[Donate][donate] | [Download][download]

### Features:
- Work both on macOS and Windows
- Assing any DaVinci Resolve shortcut to any key or knob on Loupedeck panel
- Import custom shortcuts from DaVinci Resolve
- Import / Export custom Loupedeck configurations

### Notes:
- I will continue work on project after May'21, so the next version / bug fixes and other improvements will be by the end of June.
- Initially installing with empty keys/knobs config (it will be changed later)
- App is not filtering shortcuts, so it will go to any active app

#### Features In Progress:
- Customizable chaining of shortcuts
- Predefined custom text inputs (useful for fast labeling)
- Color Page support (Color Wheels, Color Warper, Curves, etc.)

---
#### How to build:
Languages: TypeScript & Go
- Clone project `git clone https://github.com/artlasovsky/fyrlykt_beta`
- `cd react-electron`
- `yarn` to install all Node JS dependencies
- `yarn go-make-win` or `yarn go-make-mac` to build the **core**
- `yarn start` to run for **development**
- `yarn make` to **build**


[donate]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KACYGFTZSTPBW "Support further app development"
[download]: https://github.com/artlasovsky/fyrlykt_beta/releases "Download"