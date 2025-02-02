import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;
const useBC = !!process.env.BROWSERCAT_API_KEY;

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
  timeout: 1000 * 60,
  workers: useBC ? 10 : isCI ? 1 : '50%',
  retries: useBC || isCI ? 2 : 0,
  maxFailures: useBC && !isCI ? 0 : 3,
  forbidOnly: isCI,

  use: {
    connectOptions: useBC ? {
      wsEndpoint: 'wss://api.browsercat.com/connect',
      headers: {'Api-Key': process.env.BROWSERCAT_API_KEY},
    },
  },
});
