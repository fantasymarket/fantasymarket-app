<h1>FANTASYMARKET-APP</h1>

![Node.js CI](https://github.com/explodingcamera/fantasymarket-app/workflows/Node.js%20CI/badge.svg?branch=develop)
![netlify](https://img.shields.io/netlify/306db36d-47d1-40d3-9f52-c52a5b7633e5?style=flat)
[![Coverage Status](https://coveralls.io/repos/github/explodingcamera/fantasymarket-app/badge.svg?t=LFt2Sc)](https://coveralls.io/github/explodingcamera/fantasymarket-app)

## Table of Contents

- [Project Structure](#structure)
- [Installation](#installation)
- [Development](#development)
  - [Recommended Tools](#recommended-tools)
  - [Testing](#testing)

## Structure

<big><pre>
**fantasymarket-app**
├── [components](components/) _# reusable react components_
├── [pages](packages/) &nbsp;&nbsp;&nbsp;&nbsp; _# page components_
├── [utils](utils/) &nbsp;&nbsp;&nbsp;&nbsp; _# utility functions_
├── [tests](tests/) &nbsp;&nbsp;&nbsp;&nbsp; _# tests_
│   ├── integration &nbsp; _# integration/e2e tests_
│   └── unit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _# unit & snapshot tests_
└── [public](public/) &nbsp;&nbsp;&nbsp; _# static files_</pre></big>

## Installation

### 1. Install Requirements

- [node.js >=12.10](https://nodejs.org/en/download/)
- [yarn >=1.17](https://classic.yarnpkg.com/en/docs/install)
- [docker (optional, used to deploy)](https://docs.docker.com/engine/installation/#supported-platforms)

### 2. Clone Repo

```bash
$ git clone https://github.com/explodingcamera/fantasymarket-app.git && cd fantasymarket-app
```

### 3. Install Dependencies

```bash
$ yarn
```

## Development

### Recommended Tools

- `VSCode` (Recommended):
	- `EditorConfig`, `ESLint`, `Babel Javascript`
- `Atom`:
	- `language-babel`, `linter-eslint`, `editorconfig`, `autocomplete-modules`

### Testing

Run all tests + linters

```bash
$ yarn lint 			# check for linting errors
$ yarn test 			# run all tests
$ yarn test -u			# run all tests & update snapshots
$ yarn test:unit 		# run unit tests
$ yarn test:integration # run integration tests
$ yarn test:coverage	# check test coverage
```

<br>
