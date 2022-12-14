import {defineConfig} from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default ({mode}) => {
  const isDev = mode === 'development'
  
  return defineConfig({
    plugins: [
      vueJsx()
    ],
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    esbuild: {
      pure: isDev ? [] : ['console.log', 'debugger']
    },
    server: {
      host: '0.0.0.0',
      port: 5001
    },
    build: {
      minify: false
    }
  })
}
