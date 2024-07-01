## Clone The Repo

```
git clone git@github.com:klava0303/saucedemo.git
```

## Install Dependencies
Download and install Nodejs https://nodejs.org/en

## Run all tests via CLI 
```
npx playwright test 
```

By default Playwright will run all tests in Chrome, Firefox and Webkit in headless mode. 
To specify a browser, tag with: 
```
--project=chromium 
```
(alternatively: firefox, webkit)

To run tests in headed mode, tag with: 
```
--headed 
```

## Run a specific test file
```
npx playwright test login.spec.ts --project=chromium -–headed
```

## Reporting 
To see full test report 
```
npx playwright show-report
```
