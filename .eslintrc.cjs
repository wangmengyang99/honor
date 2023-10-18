/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  "rules": {
    "vue/multi-word-component-names": "false",
    'prettier/prettier': ['warn',{
      singleQuote: true,
      semi: false,
      printWidth: 120,
      endOfLine:'auto'
    }],
    
    'no-undef':'error',
  },
}
