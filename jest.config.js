
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})


const customJestConfig  = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node-modules', '/.next'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: [
    '<rootDir>/src/tests/setupTests.ts'
  ],
  transform: {
    '^.\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)