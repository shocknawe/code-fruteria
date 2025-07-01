module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}"],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    '/build',
    '/jest.config.js',
    '/jest.setup.ts',
    '/webpack.config.js',
    // ignore backend for now
    '/auth/',
    '/engine/',
    '/mocks/',
    '/server/',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'jest-transform-stub',
  }
};
