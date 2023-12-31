module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json' // 指定项目 config 文件位置
  },
  extends: [
    'standard-with-typescript',
    'plugin:node/recommended',
    'plugin:security/recommended'
  ],
  plugins: [
    'node',
    'security',
    '@typescript-eslint'
  ],
  env: {
    node: true,
    es2020: true,
    commonjs: true
  },
  rules: {
    'prefer-const': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    complexity: [1, 10],
    'max-len': [
      1,
      {
        code: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true
      }
    ],
    'node/no-unpublished-import': ['error', {
      allowModules: ['rollup-plugin-typescript2'],
      tryExtensions: ['.js', '.ts', '.jsx', '.json']
    }],
    'node/no-missing-import': ['error', {
      allowModules: [],
      tryExtensions: ['.js', '.ts', '.json', '.node']
    }],
    "@typescript-eslint/strict-boolean-expressions": 0,
    'security/detect-object-injection': 0, // 忽略对象属性访问注入的安全风险
    'security/detect-non-literal-fs-filename': 0, // 忽略非字面量（字符串常量）访问本地文件路径的安全风险
    'node/no-unsupported-features/es-syntax': [2, { ignores: ['modules'] }] // 忽略使用 ES Module 相关语法的错误
  }
}
