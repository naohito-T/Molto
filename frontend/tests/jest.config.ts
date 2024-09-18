import type { Config } from '@jest/types';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

/**
 * @NOTE <rootDir> = ./tests
 * @see https://zenn.dev/iamtillmans/scraps/53a0368f9578d4
 * next/jestが自動的に以下のようなJest設定をしてくれる。
 *  - スタイルシート(.css, .module.css, .scss variants)と画像のインポートの自動モック化
 *  - .env(およびすべてのバリエーション)をprocess.envにロード
 *  - node_module をテストの解決と変更から無視す
 *  - テスト解決から .next を無視する
 *  - Next.jsのコンパイラートランスフォームを有効にするフラグをnext.config.jsに読み込み
 */
const customJestConfig: Config.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/', 'src'],
  testMatch: ['<rootDir>/**/*.test.tsx', '<rootDir>/**/*.test.ts'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/../src/$1',
    '~/(.*)$': '<rootDir>/../$1',
    'swiper/react': '<rootDir>/__mocks__/swiper.tsx',
    'swiper/css': '<rootDir>/__mocks__/swiper.tsx',
  },
  transform: {
    '.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        // エラーを見やすくする( 有効じゃないと内容がズレて表示されます
        sourceMaps: true,
        module: {
          // 出力するファイルをcommonjsとする
          type: 'commonjs',
        },
        jsc: {
          parser: {
            // ソースコードをtypescriptとしてパースする
            syntax: 'typescript',
            tsx: true, // jsx記法を許可する
          },

          transform: {
            react: {
              // 必須。省略すると "ReferenceError: React is not defined" が発生します
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
};

export default createJestConfig(customJestConfig);
