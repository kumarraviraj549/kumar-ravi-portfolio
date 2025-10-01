// This script will deploy the webpack build output to the 'gh-pages' branch for GitHub Pages hosting
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repo = execSync('git config --get remote.origin.url').toString().trim();
if (!repo) {
  console.error('No git remote origin found. Please add a remote repository.');
  process.exit(1);
}

const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.error('No dist folder found. Please run "npm run build" first.');
  process.exit(1);
}

console.log('Deploying to GitHub Pages...');

try {
  execSync('git checkout --orphan gh-pages', { stdio: 'inherit' });
  execSync('git --work-tree dist add --all', { stdio: 'inherit' });
  execSync('git --work-tree dist commit -m "Deploy to gh-pages"', { stdio: 'inherit' });
  execSync('git push origin HEAD:gh-pages --force', { stdio: 'inherit' });
  execSync('git checkout -f main', { stdio: 'inherit' });
  execSync('git branch -D gh-pages', { stdio: 'inherit' });
  console.log('Deployed successfully!');
} catch (err) {
  console.error('Deployment failed:', err);
  process.exit(1);
}
