# rsocket-demo
Demo server for rsocket

## Local Development

To edit the homepage (including the JavaScript example code), do the following:

- Fork/clone the repo and `cd` to the root directory.
- Install the JavaScript dependencies with;

    yarn build

- The generated code in `src/main/resources/static/js/` should be
  checked in.

- Run local server

    heroku local web

- Hit http://localhost:8080 in a webbrowser

- Hit ws://localhost:8080/rsocket with rsocket
