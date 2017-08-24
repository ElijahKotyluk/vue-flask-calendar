# eli-vue-scaffold

This is a basic project skeleton. This will make projects easier for the initial start giving me a basic outline to follow. Reusing this skeleton through multiple projects will save time by already having all of your basic files created to begin a project.

## file structure

```
eli-vue-scaffold/
  ├── *node_modules/
  ├── src/
  |   ├── js/
  |   |   └── components/
  |   |   |   └── App.vue        
  |   |   └── index.js
  |   └── styles
  |       ├── _reset.scss
  |       ├── _variables.scss
  |       └── index.scss
  ├── .gitignore
  ├── *index.bundle.js
  ├── *index.bundle.css
  ├── index.html
  ├── Makefile
  ├── package.json
  ├── README.md
  ├── webpack.config.js
  └── *yarn.lock

```

Filenames denoted with an asterisk `*` are auto generated and should not be modified.

## file explanation

- `node_modules/` : Downloaded dependencies.
- `src/` : Source folder for Javascript and SCSS.
  - `js/` : Javascript folder.
    - `components/` : Vue components.
      - `App.vue` : Main application component.
    - `index.js` : Main application entry point for Javascript.
  - `styles/` : Styles folder.
    - `_reset.scss` : Global style reset partial.
    - `_variables.scss` : SCSS variables partial.
    - `index.scss` : Main application entry point for SCSS.
- `.gitignore` : Tells git what files not to check in.
- `index.html` : Main project page.
- `Makefile` : Project Makefile. Configures project build using `make`.
- `package.json` : Project metadata and dependencies.
- `README.md` : Project README.
- `webpack.config.js` : Webpack config. Configures bundling of frontend assets.
- `index.bundle.js` : Bundled Javascript file.
- `index.bundle.css` : Bundled CSS file.
- `yarn.lock` : Yarn lockfile.

## getting started

1. Check out this repo: `git clone https://github.com/elijahkotyluk/eli-vue-scaffold.git`
1. In Atom search the whole project for the string `${project-name}` and replace it with desired project name.
1. Edit `package.json` project description, authors, dependencies, and possibly license.
1. Do initial build: `make`
1. In `index.html` edit title.
1. Replace this README file with documentation for your new project! BITCH!
1
