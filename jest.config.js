export default {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['vue', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    '/node_modules/(?!(vue|@vue|vue-router))',
    "/node_modules/(?!your-esm-library/)"
  ],
  globals: {
    'vue-jest': {
      experimentalCSSCompile: false,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  collectCoverageFrom: [
    '**/**/apiService.js'
  ],
  collectCoverage: true, 
  coverageDirectory: 'coverage', 
  coverageReporters: ['text', 'lcov'], 
};

