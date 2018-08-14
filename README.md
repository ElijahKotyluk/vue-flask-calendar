# vue-moment-calendar

This will start out as a basic calendar application that will display current month, as well as past and future. It will allow user input for scheduling meetings or appointments with reminders that can be created prior to that obligation. This project is mainly for my want to further my knowledge of Vue.js and Moment.js and hone those skills.

## file structure

```
vue-moment-calendar/
  ├── *node_modules/
  ├── src/
  |   ├── js/
  |   |   └── components/
  |   |   |   └── App.vue
  |   |   |   └── Calendar.vue
  |   |   |   └── CalendarDays.vue
  |   |   |   └── CurrentMonth.vue        
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
      - `Calendar.vue` : Calendar component.
      - `CalendarDays.vue` : Component for rendering days in the calendar.
      - `CurrentMonth.vue` : Displays current month/selected month in header.
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

1. Check out this repo: `git clone https://github.com/ElijahKotyluk/Vue-Moment-Calendar`
