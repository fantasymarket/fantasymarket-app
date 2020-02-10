<h1>FANTASYMARKET-APP</h1>
<a href="https://travis-ci.com/explodingcamera/fantasymarket-app">
  <img src="https://img.shields.io/travis/com/explodingcamera/fantasymarket-app?style=for-the-badge" alt="Build Status">
</a>
<a href="https://github.com/styled-components/styled-components">
  <img src="https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e&style=for-the-badge" alt="style: styled-components">
</a>
<br>

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
└── [static](static/) &nbsp;&nbsp;&nbsp; _# static files_</pre></big>

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

- `VSCode` (Recommended)
	- `EditorConfig`, `ESLint`, `Babel Javascript`
- `Atom`:
	- `language-babel`, `linter-eslint`, `editorconfig`, `autocomplete-modules`

### Testing

Run all tests + linters

```bash
$ yarn run test
```

<br>
