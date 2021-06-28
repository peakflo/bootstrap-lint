// jest.config.js
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./scripts/testSetup.ts'],
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: ['./src/**/*.js']
}
