module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: 'as-needed',
  trailingComma: 'none',
  bracketSpacing: true,
  jsxBracketSameLine: true,
  arrowParens: 'always',
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'ignore',
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  scripts: {
    format:
      "onchange './**/*.js' './**/*.ts' './**/*.tsx' -- prettier --write {{changed}}"
  }
};
