import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    actionTimeout: 10000,
    video: 'off',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
  retries: 1,
  //workers: 1,
};
export default config;