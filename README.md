# TinkerStack.io

`v0.1.0`

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Resources](#resources)
- [Contributing](#contributing)
- [License](#license)

## Background

This is an internet-based tech company. Full background coming soon...

## Install

Below are the steps to get started for local development.

**Step 1: Clone the repo and `cd` into the project folder**

```sh
git@github.com:derrickyoo/tinker-stack-io.git
cd tinker-stack-io
```

**Step 2: Install both server and client-side dependencies**
```sh
# tinker-stack-io
npm install

# tinker-stack-io/client
cd client
npm install
```
**Step 3: Register external APIs**

* [Google+ API](https://developers.google.com)
* [mLab](https://mlab.com)
* [Heroku](https://heroku.com) - optional

**Step 4: Set environment variables**

See `.env.example` for a list of required variables on both the **server** and **client** side directories. Add valid keys to
`.env.example` and rename the file to `.env`.

By default, this project will run in development mode using an untracked file
in `./config/dev.js`, unless specified `NODE_ENV="production"`.

**Step 5: Run development environment**

```sh
cd tinker-stack-io
npm run dev
```

## Resources

A list of helpful documents:

* [create-react-app](https://github.com/facebook/create-react-app)
* [standard-readme](https://github.com/RichardLitt/standard-readme)
* [keep-a-changelog](https://github.com/olivierlacan/keep-a-changelog)
* [semantic versioning](https://semver.org/spec/v2.0.0.html)

## Contributing

See [the contributing file](CONTRIBUTING.md)!

## License

[© Derrick Yoo.](./LICENSE)
