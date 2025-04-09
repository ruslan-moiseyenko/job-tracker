module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['api', 'web', 'pwa', 'chrome-ext', 'shared', 'docs', 'config', 'repo']],
    'scope-empty': [2, 'never'],
    'subject-case': [0],
  },
};