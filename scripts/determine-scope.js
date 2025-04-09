const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Получаем список измененных файлов
const getChangedFiles = () => {
  try {
    const output = execSync('git diff --cached --name-only').toString();
    return output.split('\n').filter(Boolean);
  } catch (error) {
    console.error('Ошибка при получении измененных файлов:', error);
    return [];
  }
};

// Определяем область на основе пути файла
const determineScopeFromPath = (filePath) => {
  const pathSegments = filePath.split(path.sep);

  // Проверка на директории приложений
  if (pathSegments[0] === 'apps') {
    if (pathSegments[1] === 'server') return 'server';
    if (pathSegments[1] === 'web') return 'web';
    if (pathSegments[1] === 'pwa') return 'pwa';
    if (pathSegments[1] === 'chrome-ext') return 'chrome-ext';
  }

  // Проверка на общие директории
  if (pathSegments[0] === 'packages' || pathSegments[0] === 'libs') return 'shared';
  if (pathSegments[0] === 'docs') return 'docs';
  if (filePath.includes('package.json') || filePath.includes('pnpm-lock.yaml')) return 'config';

  // По умолчанию
  return 'repo';
};

// Основная функция
const main = () => {
  const changedFiles = getChangedFiles();

  if (changedFiles.length === 0) {
    console.log('Нет изменений для коммита');
    return;
  }

  // Подсчитываем частоту областей
  const scopeCounts = {};
  changedFiles.forEach(file => {
    const scope = determineScopeFromPath(file);
    scopeCounts[scope] = (scopeCounts[scope] || 0) + 1;
  });

  // Находим наиболее частую область
  let mainScope = 'repo';
  let maxCount = 0;

  for (const [scope, count] of Object.entries(scopeCounts)) {
    if (count > maxCount) {
      maxCount = count;
      mainScope = scope;
    }
  }

  console.log(`\n📌 Предлагаемая область коммита: ${mainScope}`);
  console.log(`   (На основе анализа ${changedFiles.length} файлов)`);
  console.log(`   Используйте: "feat(${mainScope}): ваше сообщение"\n`);
};

// Вызываем основную функцию
main();