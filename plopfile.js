const MODULE_TYPE = {
  Store: "store",
  Component: "component",
};

module.exports = function (plop) {
  const component = [
    {
      type: "add",
      path: "template/src/components/base/{{kebabCase name}}/index.tsx",
      templateFile: "generators/component/index.tsx.hbs",
    },
    {
      type: "add",
      path: "template/src/components/base/{{kebabCase name}}/styles.ts",
      templateFile: "generators/component/styles.ts.hbs",
    },
    {
      type: "add",
      path: "template/src/components/base/{{kebabCase name}}/type.ts",
      templateFile: "generators/component/type.ts.hbs",
    },
  ];
  const store = [
    {
      type: "add",
      path: "template/src/store/types/{{camelCase name}}.ts",
      templateFile: "generators/store/interface.js.hbs",
    },
    {
      type: "add",
      path: "template/src/store/constants/{{camelCase name}}.ts",
      templateFile: "generators/store/constants.js.hbs",
    },
    {
      type: "add",
      path: "template/src/store/reducers/{{camelCase name}}.ts",
      templateFile: "generators/store/reducer.js.hbs",
    },
    {
      type: "add",
      path: "template/src/store/saga/{{camelCase name}}.ts",
      templateFile: "generators/store/saga.js.hbs",
    },
    {
      type: "modify",
      path: "template/src/store/reducers/index.ts",
      pattern: /\/\/ Reducer Imports/gi,
      template:
        "// Reducer Imports\r\nimport {{camelCase name}} from './{{camelCase name}}'",
    },
    {
      type: "modify",
      path: "template/src/store/reducers/index.ts",
      pattern: /\/\/ Reducers/gi,
      template: "// Reducers\r\n  {{camelCase name}},",
    },
    {
      type: "modify",
      path: "template/src/store/reducers/index.ts",
      pattern: /\/\/ Reducer Export/gi,
      template: "// Reducer Export\r\nexport * from './{{camelCase name}}'",
    },
    {
      type: "modify",
      path: "template/src/store/saga/index.ts",
      pattern: /\/\/ Saga Imports/gi,
      template:
        "// Saga Imports\r\nimport {{camelCase name}}Saga from './{{camelCase name}}'",
    },
    {
      type: "modify",
      path: "template/src/store/saga/index.ts",
      pattern: /\/\/ Sagas/gi,
      template: "// Sagas\r\n    ...{{camelCase name}}Saga,",
    },
    {
      type: "add",
      path: "template/src/store/selectors/{{camelCase name}}.ts",
      templateFile: "generators/redux/selectors.js.hbs",
    },
    {
      type: "modify",
      path: "template/src/store/selectors/index.ts",
      pattern: /\/\/ Selector/gi,
      template: "// Selector\r\nexport * from './{{camelCase name}}'",
    },
    {
      type: "modify",
      path: "template/src/store/types/store.ts",
      pattern: /\/\/ Import Type/gi,
      template:
        "// Import Type\r\nimport {I{{properCase name}} } from './{{camelCase name}}'",
    },
    {
      type: "modify",
      path: "template/src/store/types/store.ts",
      pattern: /\/\/ State/gi,
      template: "// State\r\n  {{camelCase name}}: I{{properCase name}}",
    },
    {
      type: "modify",
      path: "template/src/store/types/index.ts",
      pattern: /\/\/ Export Type/gi,
      template: "// Export Type\r\nexport * from './{{camelCase name}}'",
    },
  ];
  plop.setGenerator("module", {
    description: "Create a new React Native component with kebab-case folder",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your module name? (e.g., my component, my store)",
      },
      {
        type: "list",
        name: "type",
        message: "Choose Module type",
        choices: ["component", "store"],
      },
    ],
    actions(data) {
      switch (data.type) {
        case MODULE_TYPE.Store:
          return store;
        case MODULE_TYPE.Component:
          return component;
        default:
          break;
      }
    },
  });
};
