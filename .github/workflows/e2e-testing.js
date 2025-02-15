name: E2E Testing

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  testing:
    name: Start E2E Testing
    timeout-minutes: 10
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Run Playwright tests
        run: npx playwright test
        continue-on-error: true
        env:
          M365_PAGE_URL: ${{ vars.M365_PAGE_URL }}
          M365_USERNAME: ${{ secrets.M365_USERNAME }}
          M365_PASSWORD: ${{ secrets.M365_PASSWORD }}
          M365_OTP_SECRET: ${{ secrets.M365_OTP_SECRET }}

      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
