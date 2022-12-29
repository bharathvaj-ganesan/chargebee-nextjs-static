module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npm run tsc --noEmit',

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': filenames => [
    `npm run eslint ${filenames.join(' ')}`,
    `npm run prettier --write ${filenames.join(' ')}`
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': filenames => `npm run prettier --write ${filenames.join(' ')}`
};