// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  testMatch: ['exercises/**/*.spec.js', 'solutions/**/*.spec.js'],
  retries: 0,
  reporter: [['list']],
  use: { baseURL: 'http://localhost:4173' },
  // LATENCE (ms) et BUG=remise sont lus par app/server.js : voir README.
  webServer: { command: 'node app/server.js', url: 'http://localhost:4173', reuseExistingServer: !process.env.CI },
});
