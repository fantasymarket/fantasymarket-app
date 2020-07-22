# Testing

## Overview

To run our test locl suite, please utilise the following yarn scripts/commands:

```bash
$ yarn lint 			# check for linting errors
$ yarn test 			# run tests
$ yarn test:full 		# run all tests (including e2e/browser testing)
$ yarn test:types		# check types
$ yarn test:unit 		# run unit tests
$ yarn test:unit -u		# run unit & update snapshots
$ yarn test:e2e 		# run end-to-end tests
$ yarn test:integration # run integration tests
```

## The types of automated tests we run

* E2E
	* Screenshot testing of our storybook library using [@storybook/addon-storyshots-puppeteer](https://www.npmjs.com/package/@storybook/addon-storyshots-puppeteer)
	* Performance Testing using [Lighthouse](https://developers.google.com/web/tools/lighthouse)
	* Accesibility testing using [@storybook/addon-a11y](https://www.npmjs.com/package/@storybook/addon-a11y)
	* General E2E tests using [puppeteer](https://github.com/puppeteer/puppeteer)

* Integration
	* integrtion tests for our [api service](./../api) (REST API is [mocked](./../api/transport/__mocks__))

* Unit
	* Snapshot testing of our storybook library using storyshots
	* extensive unit testing for our utility functions
	* manual snapshot & unit testing for larger components using [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)

* Other
	* Checking for correct useage of http headers ([securityheaders.com](https://securityheaders.com/))
	* [Mozilla Observatory](https://observatory.mozilla.org/analyze/develop--fantasymarket.netlify.app)
	* Automated code-reviews, code smell detection using [codecliate](https://codeclimate.com/github/fantasymarket/fantasymarket-app)
	* [codecoverage](https://codecov.io/gh/fantasymarket/fantasymarket-app)
	* Voulnability analysis using [codeql](https://securitylab.github.com/tools/codeql)
