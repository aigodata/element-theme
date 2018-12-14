import Vue from 'vue'
import Router from 'vue-router'

import main from './views/main.vue'
import empty from '@/views/empty.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/', name: 'main', component: main, meta: {name: '主页'},
			children: [
				{
					path: 'zh-CN', name: 'zh-CN', component: empty, meta: {name: '中文环境'},
					children: [
						{
							path: '', redirect: 'installation',
						},
						{
							path: 'installation', name: 'installation', meta: {name: '安装'},
							component: () => import('./views/zh-CN/installation.vue')
						}
					]
				}
			]
		}

	]
})
