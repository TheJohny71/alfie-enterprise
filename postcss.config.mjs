name: Deploy

on:
  push:
    branches: [ main ]

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Clean install dependencies
        run: |
          echo "Installing dependencies..."
          rm -rf node_modules
          rm -f package-lock.json
          npm install

      - name: Build
        run: |
          echo "Building project..."
          npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          force_orphan: true
