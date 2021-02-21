# rsocket-demo
Demo server for rsocket

http://rsocket-demo.herokuapp.com/

## Local JS Development

To edit the homepage (including the JavaScript example code), do the following:

- Fork/clone the repo and `cd` to the root directory.
- Install the JavaScript dependencies with;

    yarn

- Edit the html/js code, then preview the site locally with:

    yarn start

- The generated code in `src/main/resources/web/public/` should be
  checked in, and can be updated with:

    yarn run build

## Local Java/Heroku Development

To test the full app locally

- If changes are made to JS code, then use "yarn run build" as described above

- In order to build java code

    ./gradlew stage

- Add valid twitter credentials to a .env file.  Grabs values from Keys and Access tokens here https://apps.twitter.com

```
TWITTER_CONSUMER_KEY=XXXX
TWITTER_CONSUMER_SECRET=XXX
TWITTER_TOKEN=XXXX
TWITTER_TOKEN_SECRET=XXXX
```

- Run local server

    heroku local web

- Hit http://localhost:5000 in a webbrowser
