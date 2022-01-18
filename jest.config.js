
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
  projects: [
    {
      displayName: 'Node Tests',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/src/tests/node/*.test.ts']
    },
    {
      displayName: 'React Tests',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/src/tests/react/*.test.tsx']
    },
  ]
  // testEnvironment: 'jest-environment-jsdom', // jest-environment-jsdom
}

module.exports = createJestConfig(customJestConfig)