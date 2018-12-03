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
## Authentication
[Passport](http://www.passportjs.org/) is the utilized middleware for handling
[Google+ API](https://developers.google.com/+/web/api/rest/?hl=en_US) OAuth 2.0
integration. Other strategies will be added at a future time and date. 

## Environment Variables
See `.env.example` for a list of required variables when running the server
locally and in production.
