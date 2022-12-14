const {resolve} = require('path')
const PluginVue3 = require('@inesat/plugin-vue3')
const {defineConfig} = require('@inesat/cli')

module.exports = defineConfig(({mode, env}) => {
  return {
    base: '/',
    plugins: [
      PluginVue3
    ],
    appEntry: 'main.ts',
    webpackChain(chain) {
      chain.module
        .rule('less-loader')
        .test(/\.less$/i)
        .use('less-loader')
        .loader(require.resolve('less-loader'))
        .options({
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true
          }
        })
        .end()
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      },
      extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json']
    },
    server: {
      host: '0.0.0.0',
      port: 5000
    },
    build: {
      outDir: process.env.VUE_OUT_DIR,
      target: 'es5',
      cssTarget: 'chrome52',
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      createTs: false,
      lib: {
        entry: 'main.ts',
        name: '@inesat/it-components',
        formats: ['umd', 'esm'],
        fileName: (format) => `${format}/inesat-it-components.js`
      }
    }
  }
})
