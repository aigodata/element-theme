import Vue from 'vue'
import Router from 'vue-router'

import main from './views/main.vue'
import empty from '@/views/empty.vue'

Vue.use(Router)

// 白垩纪
const chalk = () => import('./views/theme/theme-chalk.vue')
// 日食
const mixiaoku = () => import('./views/theme/theme-mixiaoku.vue')

let children = [
	{
		path: '', redirect: 'installation',
	},
	{
		path: 'changelog', name: 'changelog', meta: {name: '更新日志'},
		component: () => import('./views/zh-CN/changelog.vue')
	},
	{
		path: 'installation', name: 'installation', meta: {name: '安装'},
		component: () => import('./views/zh-CN/installation.vue')
	},
	{
		path: 'transition', name: 'transition', meta: {name: '内置过渡动画'},
		component: () => import('./views/zh-CN/transition.vue')
	},
	{
		path: 'layout', name: 'layout', meta: {name: '布局'},
		component: () => import('./views/zh-CN/layout.vue')
	},
	{
		path: 'container', name: 'container', meta: {name: '布局容器'},
		component: () => import('./views/zh-CN/container.vue')
	},
	{
		path: 'color', name: 'color', meta: {name: '色彩'},
		component: () => import('./views/zh-CN/color.vue')
	},
	{
		path: 'typography', name: 'typography', meta: {name: '字体'},
		component: () => import('./views/zh-CN/typography.vue')
	},
	{
		path: 'icon', name: 'icon', meta: {name: '图标'},
		component: () => import('./views/zh-CN/icon.vue')
	},
	{
		path: 'border', name: 'border', meta: {name: '边框'},
		component: () => import('./views/zh-CN/border.vue')
	},
	{
		path: 'button', name: 'button', meta: {name: '按钮'},
		component: () => import('./views/zh-CN/button.vue')
	},
	{
		path: 'link', name: 'link', meta: {name: '文字链接'},
		component: () => import('./views/zh-CN/link.vue')
	},
	{
		path: 'radio', name: 'radio', meta: {name: '单选框'},
		component: () => import('./views/zh-CN/radio.vue')
	},
	{
		path: 'checkbox', name: 'checkbox', meta: {name: '多选框'},
		component: () => import('./views/zh-CN/checkbox.vue')
	},
	{
		path: 'input', name: 'input', meta: {name: '输入框'},
		component: () => import('./views/zh-CN/input.vue')
	},
	{
		path: 'input-number', name: 'input-number', meta: {name: '计数器'},
		component: () => import('./views/zh-CN/input-number.vue')
	},
	{
		path: 'select', name: 'select', meta: {name: '选择器'},
		component: () => import('./views/zh-CN/select.vue')
	},
	{
		path: 'cascader', name: 'cascader', meta: {name: '级联选择器'},
		component: () => import('./views/zh-CN/cascader.vue')
	},
	{
		path: 'switch', name: 'switch', meta: {name: '开关'},
		component: () => import('./views/zh-CN/switch.vue')
	},
	{
		path: 'slider', name: 'slider', meta: {name: '滑块'},
		component: () => import('./views/zh-CN/slider.vue')
	},
	{
		path: 'time-picker', name: 'time-picker', meta: {name: '时间选择器'},
		component: () => import('./views/zh-CN/time-picker.vue')
	},
	{
		path: 'date-picker', name: 'date-picker', meta: {name: '日期选择器'},
		component: () => import('./views/zh-CN/date-picker.vue')
	},
	{
		path: 'datetime-picker', name: 'datetime-picker', meta: {name: '日期时间选择器'},
		component: () => import('./views/zh-CN/datetime-picker.vue')
	},
	{
		path: 'upload', name: 'upload', meta: {name: '上传'},
		component: () => import('./views/zh-CN/upload.vue')
	},
	{
		path: 'rate', name: 'rate', meta: {name: '评分'},
		component: () => import('./views/zh-CN/rate.vue')
	},
	{
		path: 'color-picker', name: 'color-picker', meta: {name: '颜色选择器'},
		component: () => import('./views/zh-CN/color-picker.vue')
	},
	{
		path: 'transfer', name: 'transfer', meta: {name: '穿梭框'},
		component: () => import('./views/zh-CN/transfer.vue')
	},
	{
		path: 'form', name: 'form', meta: {name: '表单'},
		component: () => import('./views/zh-CN/form.vue')
	},
	{
		path: 'table', name: 'table', meta: {name: '表格'},
		component: () => import('./views/zh-CN/table.vue')
	},
	{
		path: 'tag', name: 'tag', meta: {name: '标签'},
		component: () => import('./views/zh-CN/tag.vue')
	},
	{
		path: 'progress', name: 'progress', meta: {name: '进度条'},
		component: () => import('./views/zh-CN/progress.vue')
	},
	{
		path: 'tree', name: 'tree', meta: {name: '树形控件'},
		component: () => import('./views/zh-CN/tree.vue')
	},
	{
		path: 'pagination', name: 'pagination', meta: {name: '分页'},
		component: () => import('./views/zh-CN/pagination.vue')
	},
	{
		path: 'badge', name: 'badge', meta: {name: '标记'},
		component: () => import('./views/zh-CN/badge.vue')
	},
	{
		path: 'avatar', name: 'avatar', meta: {name: '头像'},
		component: () => import('./views/zh-CN/avatar.vue')
	},
	{
		path: 'alert', name: 'alert', meta: {name: '警告'},
		component: () => import('./views/zh-CN/alert.vue')
	},
	{
		path: 'loading', name: 'loading', meta: {name: '加载'},
		component: () => import('./views/zh-CN/loading.vue')
	},
	{
		path: 'message', name: 'message', meta: {name: '消息提示'},
		component: () => import('./views/zh-CN/message.vue')
	},
	{
		path: 'message-box', name: 'message-box', meta: {name: '弹框'},
		component: () => import('./views/zh-CN/message-box.vue')
	},
	{
		path: 'notification', name: 'notification', meta: {name: '通知'},
		component: () => import('./views/zh-CN/notification.vue')
	},
	{
		path: 'menu', name: 'menu', meta: {name: '导航菜单'},
		component: () => import('./views/zh-CN/menu.vue')
	},
	{
		path: 'tabs', name: 'tabs', meta: {name: '标签页'},
		component: () => import('./views/zh-CN/tabs.vue')
	},
	{
		path: 'breadcrumb', name: 'breadcrumb', meta: {name: '面包屑'},
		component: () => import('./views/zh-CN/breadcrumb.vue')
	},
	{
		path: 'pageheader', name: 'pageheader', meta: {name: '页头'},
		component: () => import('./views/zh-CN/pageheader.vue')
	},
	{
		path: 'dropdown', name: 'dropdown', meta: {name: '下拉菜单'},
		component: () => import('./views/zh-CN/dropdown.vue')
	},
	{
		path: 'steps', name: 'steps', meta: {name: '步骤条'},
		component: () => import('./views/zh-CN/steps.vue')
	},
	{
		path: 'dialog', name: 'dialog', meta: {name: '对话框'},
		component: () => import('./views/zh-CN/dialog.vue')
	},
	{
		path: 'tooltip', name: 'tooltip', meta: {name: '文字提示'},
		component: () => import('./views/zh-CN/tooltip.vue')
	},
	{
		path: 'popover', name: 'popover', meta: {name: '弹出框'},
		component: () => import('./views/zh-CN/popover.vue')
	},
	{
		path: 'card', name: 'card', meta: {name: '卡片'},
		component: () => import('./views/zh-CN/card.vue')
	},
	{
		path: 'carousel', name: 'carousel', meta: {name: '走马灯'},
		component: () => import('./views/zh-CN/carousel.vue')
	},
	{
		path: 'collapse', name: 'collapse', meta: {name: '折叠面板'},
		component: () => import('./views/zh-CN/collapse.vue')
	},
	{
		path: 'divider', name: 'divider', meta: {name: '分割线'},
		component: () => import('./views/zh-CN/divider.vue')
	},
	{
		path: 'calendar', name: 'calendar', meta: {name: '日历'},
		component: () => import('./views/zh-CN/calendar.vue')
	},
	{
		path: 'timeline', name: 'timeline', meta: {name: '时间线'},
		component: () => import('./views/zh-CN/timeline.vue')
	},
	{
		path: 'image', name: 'image', meta: {name: 'Image图片'},
		component: () => import('./views/zh-CN/image.vue')
	},
	{
		path: 'backtop', name: 'backtop', meta: {name: '回到顶部'},
		component: () => import('./views/zh-CN/backtop.vue')
	},
	{
		path: 'infiniteScroll', name: 'infiniteScroll', meta: {name: '无限滚动'},
		component: () => import('./views/zh-CN/infiniteScroll.vue')
	},
	{
		path: 'drawer', name: 'drawer', meta: {name: '抽屉'},
		component: () => import('./views/zh-CN/drawer.vue')
	}
]

export default new Router({
	routes: [
		{
			path: '/', name: 'main', component: main, meta: {name: '主页'},
			children: [
				{
					path: 'zh-CN', name: 'zh-CN', component: empty, meta: {name: '中文环境'},
					children: [
						{
							path: 'theme-chalk', name: 'theme-chalk', component: chalk, meta: {name: '主题: 白垩纪'},
							children: children
						},
						{
							path: 'theme-mixiaoku', name: 'theme-mixiaoku', component: mixiaoku, meta: {name: '主题: 日食'},
							children: children
						}
					]
				},
			]
		}
	]
})
