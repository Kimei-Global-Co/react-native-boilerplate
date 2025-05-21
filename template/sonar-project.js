const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "https://sonarcloud.io",
    token: process.env.SONAR_TOKEN,
    options: {
      "sonar.projectKey": "react-native-boilerplate",
      "sonar.organization": "Kimei-Global",
      "sonar.sources": "src",
      "sonar.exclusions": "**/*.test.ts,**/__tests__/**,node_modules/**",
      "sonar.typescript.tsconfigPath": "tsconfig.json",
      "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
    },
  },
  () => process.exit()
);
