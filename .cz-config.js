module.exports = {
  types: [
    { value: 'feat', name: 'feat:     Новая функциональность' },
    { value: 'fix', name: 'fix:      Исправление ошибки' },
    { value: 'docs', name: 'docs:     Документация' },
    { value: 'style', name: 'style:    Стили и форматирование' },
    { value: 'refactor', name: 'refactor: Рефакторинг кода' },
    { value: 'perf', name: 'perf:     Улучшение производительности' },
    { value: 'test', name: 'test:     Добавление тестов' },
    { value: 'build', name: 'build:    Изменения в процессе сборки' },
    { value: 'ci', name: 'ci:       Изменения в CI конфигурации' },
    { value: 'chore', name: 'chore:    Прочие изменения' },
  ],

  scopes: [
    { name: 'server' },
    { name: 'web' },
    { name: 'pwa' },
    { name: 'chrome-ext' },
    { name: 'shared' },
    { name: 'docs' },
    { name: 'config' },
    { name: 'repo' }
  ],

  messages: {
    type: 'Выберите тип изменения:',
    scope: 'Выберите ОБЛАСТЬ, которую вы изменили (опционально):',
    subject: 'Напишите КРАТКОЕ описание:\n',
    body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    breaking: 'Список BREAKING CHANGES (опционально):\n',
    footer: 'Место для метаданных (тикеты, ссылки и прочее). Например: BREAKING CHANGE, JIRA #123:\n',
    confirmCommit: 'Вас устраивает получившийся коммит?',
  },

  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['footer'],
  subjectLimit: 100,
};