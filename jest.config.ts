export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  roots: ["<rootDir>/src"],
  collectCoversageFrom: ["<rootDir>/src/**/*.ts"],
  testEvironment: "node",
  transform: { ".+\\.ts$": "ts-jest" },
};
