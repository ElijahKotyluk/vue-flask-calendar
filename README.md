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
  |   |   |   └── EventForm.vue   
  |   |   └── main.js
  |   ├── store/
  |   |    └── index.js
  |   └── styles/
  |       ├── _reset.scss
  |       ├── _variables.scss
  |       └── main.scss
  ├── .gitignore
  ├── *main.bundle.js
  ├── *main.bundle.css
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
      - `EventForm.vue` : Component for displaying and saving events in the calendar.
    - `main.js` : Main application entry point for Javascript.
  - `store/` : Vuex data state store.
    - `index.js` : Entrypoint for Vuex store.
  - `styles/` : Styles folder.
    - `_reset.scss` : Global style reset partial.
    - `_variables.scss` : SCSS variables partial.
    - `main.scss` : Main application entry point for SCSS.
- `.gitignore` : Tells git what files not to check in.
- `index.html` : Main project page.
- `Makefile` : Project Makefile. Configures project build using `make`.
- `package.json` : Project metadata and dependencies.
- `README.md` : Project README.
- `webpack.config.js` : Webpack config. Configures bundling of frontend assets.
- `main.bundle.js` : Bundled Javascript file.
- `main.bundle.css` : Bundled CSS file.
- `yarn.lock` : Yarn lockfile.

## getting started

1. Check out this repo: `git clone https://github.com/ElijahKotyluk/Vue-Moment-Calendar`
2. Locate and open `vue-moment-calendar` file directory in the command line/terminal.
3. Run `make` in the command line/terminal. (If you haven't installed yarn globally, you will be instructed to do so when you run `make` command.
4. Open index.html file with browser to view the applications current state. (In progress)
