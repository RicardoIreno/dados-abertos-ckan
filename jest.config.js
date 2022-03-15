
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})


const customJestConfig  = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node-modules', '/.next'],
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts'
  ],
  transform: {
    '^.\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  projects: [
    {
      displayName: 'Node Tests',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/src/**/*.test.ts']
    },
    {
      displayName: 'React Tests',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/src/**/*.test.tsx']
    },
  ]
}

module.exports = createJestConfig(customJestConfig)