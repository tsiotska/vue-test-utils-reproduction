module.exports = {
  "moduleFileExtensions": [
    "js",
    "ts",
    "json",
    "vue"
  ],
  "transform": {
    "^.+\\.jsx?$": "babel-jest",
    ".*\\.(vue)$": "vue-jest",
  },
  "transformIgnorePatterns": [],
  "moduleNameMapper": {
    "@/(.*)$": "<rootDir>/src/$1"
  },
  "resetMocks": false,
  /*"globals": {
    'vue-jest': {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('a-'),
      },
    },
  },*/
}

