import DefaultTheme from 'vitepress/theme'
import {setupDirectives} from './plugins'
import {registerComponents} from './register-components'
import Antd from 'ant-design-vue'
import * as Icons from '@ant-design/icons-vue'
import 'ant-design-vue/dist/antd.css'
import './style/index.css'
import * as ItProComponents from '@inesat/it-components'

export default {
  ...DefaultTheme,
  enhanceApp({app, router, siteData}) {
    function setupPlugins() {
      // 注册全局自定义指令
      setupDirectives(app)
    }
    setupPlugins()
    app.use(Antd)
    for (let i in Icons) {
      app.component(i, Icons[i])
    }
    console.log(ItProComponents)
    for (let i in ItProComponents) {
      app.component(i, ItProComponents[i])
    }
    registerComponents(app)
  }
}
