/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Evita warnings de transformação dupla em módulos da node_modules
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
 },
};
