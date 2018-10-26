# vue-moment-calendar

This will start out as a basic calendar application that will display current month, as well as past and future. It will allow user input for scheduling meetings or appointments with reminders that can be created prior to that obligation. This project is mainly for my want to further my knowledge of Vue.js and Moment.js and hone those skills.

## file structure

```
vue-moment-calendar/
  ├── *dist/
  ├── *env/
  ├── *node_modules/
  ├── *lib/
  ├── vue_moment_calendar/
  |   ├── assets/
  |   |   ├── js/
  |   |   |   ├── components/
  |   |   |   |   ├── App.vue
  |   |   |   |   ├── Calendar.vue
  |   |   |   |   ├── CalendarDays.vue
  |   |   |   |   ├── CurrentMonth.vue
  |   |   |   |   └── EventForm.vue
  |   |   |   ├── store/
  |   |   |   |   └── store.js
  |   |   |   ├── App.vue
  |   |   |   ├── main.js
  |   |   |   ├── routes.js
  |   |   |   └── services.js
  |   |   ├── static/
  |   |   |   ├── 404.html
  |   |   |   └── index.html
  |   |   ├── styles/
  |   |   |   ├── _reset.scss
  |   |   |   ├── _variables.scss
  |   |   |   └── main.scss
  |   |   ├── handlers/
  |   |   |   ├── __init__.py
  |   |   |   ├── day.py
  |   |   |   ├── event.py
  |   |   |   └── user.py
  |   |   └── models/
  |   |       ├── __init__.py
  |   |       ├── day.py
  |   |       ├── event.py
  |   |       └── user.py
  |   ├── __init__.py
  |   └── views.py
  ├── .gitignore
  ├── app.yaml
  ├── appengine_config.py
  ├── Makefile
  ├── package.json
  ├── README.md
  ├── requirements.txt
  ├── setup.py
  ├── webpack.config.js
  └── *yarn.lock

```

Filenames denoted with an asterisk `*` are auto generated and should not be modified.

## file explanation

- `dist/` : Folder for bundled files.
  - `main.bundle.css` : Bundled CSS file.
  - `main.bundle.js` : Bundled Javascript file.
- `env/` : Python environment folder.
- `lib/` : Python libraries folder.
- `node_modules/` : Downloaded dependencies.
- `vue_moment_calendar/` : Main application folder.
  - `assets/` : Assets folder.
    - `js/` : Javascript folder.
      - `components/` : Vue components.
        - `Calendar.vue` : Calendar component.
        - `CalendarDays.vue` : Component for rendering days in the calendar.
        - `CurrentMonth.vue` : Displays current month/selected month in header.
        - `EventForm.vue` : Component for displaying and saving events in the calendar.
      - `store/` : Vuex store folder.
        - `store.js` : Entrypoint for Vuex store.
      - `App.vue` : Main application component.
      - `main.js` : Main application entry point for Javascript.
      - `routes.js` : Application routes and routing utilities.
      - `services.js` : Application service bootstrap, classes and utilities.
    - `static/` : Static folder.
      - `404.html` : Error page.
      - `index.html` : Main project page.
    - `styles/` : Styles folder.
      - `_reset.scss` : Global style reset partial.
      - `_variables.scss` : SCSS variables partial.
      - `main.scss` : Main application entry point for SCSS.
  - `handlers/` : Handlers folder.
    - `__init__.py` : Handlers initialization file.
    - `day.py` : Handlers for day model.
    - `event.py` : Handlers for event model.
    - `user.py` : Handlers for user model.
  - `models/` : Models folder.
    - `__init_.py` : Models initialization file.
    - `day.py` : Day data model/methods.
    - `event.py` : Event data model/methods.
    - `user.py` : User data model/methods.
  - `__init__.py` : Main application initialization file.
  - `views.py` : Static app views file.
- `.gitignore` : Tells git what files not to check in.
- `app.yaml` : App engine configuration settings file.
- `appengine_config.py` : App engine configuration file.
- `Makefile` : Project Makefile. Configures project build using `make`.
- `package.json` : Project metadata and dependencies.
- `README.md` : Project README.
- `requirements.txt` : pip install requirements.
- `setup.py` : Flask setup file.
- `webpack.config.js` : Webpack config. Configures bundling of frontend assets.
- `yarn.lock` : Yarn lockfile.

## getting started

1. Check out this repo: `git clone https://github.com/ElijahKotyluk/Vue-Moment-Calendar`
2. Locate and open `vue-moment-calendar` file directory in the command line/terminal.
3. Run `virtualenv env` to create a new virtual machine named `env`
4. Run `make init` to install all Javascript and Python dependencies.
5. Run `make` to bundle the front-end assets and run the development server, then visit [http://localhost:8080](http://localhost:8080) (requires [Google Cloud SDK](https://cloud.google.com/sdk/docs/) to be installed in your path).

### to run subsequent times

1. `make`
