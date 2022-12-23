import type { Config } from '@jest/types';
// next12からNext.jsにはJestの構成が組み込まれている
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig: Config.InitialOptions = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/', 'src'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/*.test.tsx', '<rootDir>/src/**/*.test.ts'],
  // moduleNameMapperは順番がめちゃくちゃ重要(https://qiita.com/o3c9/items/6dbe508a9647b8a7b397)
  // moduleNameMapper: {
  //   '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '<rootDir>/src/__mocks__/setup/mockFiles.ts',
  //   '^.+\\.(scss|css)$': '<rootDir>/src/__mocks__/setup/mockStyles.ts',
  //   '@/(.*)$': '<rootDir>/src/$1',
  //   '~/(.*)$': '<rootDir>/src/$1',
  // },

  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle   CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/src/tests/__mocks__/mockStyles.ts',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': 'rootDir>/src/tests/__mocks__/mockFiles.ts',
    '@/(.*)$': '<rootDir>/src/$1',
    '~/(.*)$': '<rootDir>/src/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig);
