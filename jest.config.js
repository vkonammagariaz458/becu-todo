module.exports = {
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  moduleDirectories: ["node_modules", "/src",
    "/src/app"
  ],
  "modulePaths": [
    "<rootDir>",
    "/src",
    "/src/app"
  ],
  testEnvironment: 'jsdom'
  //setupFilesAfterEnv: ["./jest.setup.js"]
}