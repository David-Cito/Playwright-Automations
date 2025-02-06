import { defineConfig, devices } from '@playwright/test';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file

const __dirname = path.dirname(__filename); // get the name of the directory

//console.log(__dirname);

const dash_authFile = path.join(__dirname, '../playwright/.auth/dash-auth.json');

const encircle_authFile = path.join(__dirname, '../playwright/.auth/encircle-auth.json');

const intuit_authFile = path.join(__dirname, '../playwright/.auth/intuit-auth.json');

//import path from 'path';

//const Authfile = path.resolve(__dirname, '../../playwright/.auth/dash-auth.json')
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    //storageState: './playwright/.auth/dash-auth.json',

    //Screenshot
    screenshot: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    // Setup project
    { name: 'dash-setup', testMatch: '*dash-auth.setup*.ts' },
    { name: 'encircle-setup', testMatch: '*encircle-auth.setup*.ts' },
    { name: 'intuit-setup', testMatch: '*intuit-auth.setup*.ts' },

    //{
      //name: 'chromium',
      //testMatch: 'dash.spec.ts' ,
      //use: {
        //...devices['Desktop Chrome'],
        // Use prepared auth state.
        //storageState: authFile,
      //},
    //},
    /* {
      name: 'chromium',
      testMatch: '*dash@(.spec).ts' ,
      use: devices['Desktop Chrome'],
      }, */
    {
      name: 'chromium',
      testMatch: '*encircle@(.spec).ts',
      dependencies: ['encircle-setup'],
      use: {
        storageState: encircle_authFile,
      },
    },
    {
      name: 'chromium',
      testMatch: '*dash@(.spec).ts',
      dependencies: ['dash-setup'],
      use: {
        storageState: dash_authFile,
      },
    },
    {
      name: 'chromium',
      testMatch: '*Clock-testing@(.spec).ts',
      /* dependencies: ['intuit-setup'],
      use: {
        storageState: intuit_authFile,
      }, */
    },
    /* {
      name: 'chromium - Dash',
      //testMatch: '*dash@(.spec).ts',
      dependencies: ['dash-setup'],
      use: {
        storageState: dash_authFile,
      },
    }, */
    /* {
      name: 'chromium - Dash',
      testMatch: '*dash@(.spec).ts' ,
      use: {
        ...devices['Desktop Chrome'],
        // Use prepared auth state.
        storageState: dash_authFile,
      },
      dependencies: ['dash-setup'],
    }, */
    /* {
      name: 'Chromium - Encircle',
      testMatch: '*encircle@(.spec).ts' ,
      use: {
        ...devices['Desktop Chrome'],
        // Use prepared auth state.
        storageState: encircle_authFile,
      },
      dependencies: ['encircle-setup'],
    }, */
]});
