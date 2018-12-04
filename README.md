# tinker-stack-io

TinkerStack.io. An internet-based company. 

## Running Locally
Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git@github.com:derrickyoo/tinker-stack-io.git # or clone your own fork
cd tinker-stack-io
npm install
npm start
```

## Environment Variables
See `.env.example` for a list of required variables when running the server
locally and in production. Add valid keys and rename `.env.example` to `.env`.

```sh
NODE_ENV=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
MONGODB_URI=""
COOKIE_KEY=""
```

## Dependencies
See `package.json` for a list of project dependencies.
* [express](https://www.npmjs.com/package/express)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [cookie-session](https://www.npmjs.com/package/cookie-session)
* [passport](https://www.npmjs.com/package/passport)
* [dot-env](https://www.npmjs.com/package/dotenv)

External APIs
* [Google+ API](https://developers.google.com)

## Project Development
Cloud platforms and tools used for development purposes.
* [Heroku](https://heroku.com)
* [mLab](https://mlab.com)

## Authentication
Utilizes [Passport](http://www.passportjs.org/) as a middleware for handling
OAuth strategies as well as user authentication with the server using cookies.
Other OAuth strategies will be added at a future time and date.

## Optional Plugins
* [Prettier](https://prettier.io/docs/en/) for code formatting.
