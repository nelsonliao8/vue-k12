import { createApp, h } from 'vue'
import App from './App.vue'
import './index.less'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
//import vueAplayer from 'vue-aplayer'
import scratchCard from 'lzy-scratch-card'

import { setupRouter } from './router/index'
import './router/permission'
import { setupStore } from './store/index'

import { setupProdMockServer } from './mockProdServer'

//import 'video.js/dist/video-js.css'

//import { GenerateAntdForm } from '../lib/form-making-advanced'
//import '../lib/form-making-advanced/dist/FormMaking.css'

//import KFormDesign from 'k-form-design'
//import 'k-form-design/lib/k-form-design.css'

const app = createApp(App)
app.use(Antd)    // GenerateAntdForm)
//app.use(vueAplayer)
setupRouter(app)
setupStore(app)
app.mount('#app')

// production mock server
if (process.env.NODE_ENV === 'production') {
	setupProdMockServer()
}
