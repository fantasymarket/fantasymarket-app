# FantasyMarket [![Website](https://img.shields.io/website?label=staging&url=http%3A%2F%2Fdevelop--fantasymarket.netlify.app%2F)](https://develop--fantasymarket.netlify.app/) [![Website](https://img.shields.io/website?label=production&url=http%3A%2F%2Ffantasymarket.netlify.app%2F)](https://fantasymarket.netlify.app/)


[![Node.js CI](https://github.com/fantasymarket/fantasymarket-app/workflows/Node.js%20CI/badge.svg?branch=develop)](https://github.com/fantasymarket/fantasymarket-app/actions?query=workflow%3A%22Node.js+CI%22)
[![netlify](https://img.shields.io/netlify/306db36d-47d1-40d3-9f52-c52a5b7633e5?style=flat)](https://app.netlify.com/sites/fantasymarket/overview)
[![codecov](https://codecov.io/gh/fantasymarket/fantasymarket-app/branch/develop/graph/badge.svg)](https://codecov.io/gh/fantasymarket/fantasymarket-app)
[![Security Headers](https://img.shields.io/security-headers?url=http%3A%2F%2Fdevelop--fantasymarket.netlify.app%2F)](https://securityheaders.com/?q=http%3A%2F%2Fdevelop--fantasymarket.netlify.app%2F&followRedirects=on)
[![Mozilla HTTP Observatory Grade](https://img.shields.io/mozilla-observatory/grade/develop--fantasymarket.netlify.app?publish)](https://observatory.mozilla.org/analyze/develop--fantasymarket.netlify.app)


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
├── [api](api/) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _# api/state management_
├── [tests](tests/) &nbsp;&nbsp;&nbsp;&nbsp; _# tests_
│   ├── e2e &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _# e2e tests_
│   ├── integration &nbsp; _# integration tests_
│   └── unit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _# unit & snapshot tests_
└── [public](public/) &nbsp;&nbsp;&nbsp; _# static files_</pre></big>

## Installation

### 1. Install Requirements

- [node.js >=12.10](https://nodejs.org/en/download/)
- [yarn >=1.17](https://classic.yarnpkg.com/en/docs/install)

### 2. Clone Repo

```bash
$ git clone https://github.com/fantasymarket/fantasymarket-app.git && cd fantasymarket-app
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
$ yarn test 			# run tests
$ yarn test -u			# run tests & update snapshots
$ yarn test:full 		# run all tests (including e2e/browser testing)
$ yarn test:unit 		# run unit tests
$ yarn test:e2e 		# run end-to-end tests
$ yarn test:integration # run integration tests
```

<br>
