module.exports = {
  extends: ['@inesat/eslint-config-vue3'],
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js','.jsx','.ts','.tsx']
      }
    }
  }
}
