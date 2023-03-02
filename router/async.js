/*
 * @Author: Nelson
 * @Date: 2020-10-31 18:14:30
 */
import Layout from '/@/layout/index.vue'
export default [
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		children: [
			{
				path: 'dashboard',
				name: 'xxYuwen',
				component: () => import('../views/dashboard/xxyuwen.vue'),
				meta: {
					title: '语数英教科书PDF',
					icon: 'BookOutlined',
					roles: ['admin', 'guest']
				}
			},
                        {
                                path: 'dashboard',
                                name: 'xxMath',
                                component: () => import('../views/dashboard/xxmath.vue'),
                                meta: {
                                        title: '数学教科书',

                                        icon: 'CalculatorOutlined',
                                        roles: ['admin', 'guest']
                                }
                        },
                        {
                                path: 'dashboard',
                                name: 'xxEng',
                                component: () => import('../views/dashboard/xxeng.vue'),
                                meta: {
                                        title: '小学英文MP3 ',
                                        icon: 'AudioOutlined',
                                        roles: ['admin', 'guest']
                                }
                        },
                        {
                                path: 'dashboard',
                                name: 'xxMusic',
                                component: () => import('../views/dashboard/xxmusic.vue'),
                                meta: {
                                        title: '音乐教科书 ',
                                        icon: 'AudioOutlined',
                                        roles: ['admin', 'guest']
                                }
                        },

                        {
                                path: 'dashboard',
                                name: 'xxArt',
                                component: () => import('../views/dashboard/xxart.vue'),
                                meta: {
                                        title: '美术教科书',

                                        icon: 'CalculatorOutlined',
                                        roles: ['admin', 'guest']
                                }
                        }


			
		]
	},
	{
		path: '/form',
		name: 'Form',
		component: Layout,
		meta: {
			title: '表单',
			icon: 'ContainerOutlined',
			roles: ['admin']
		},
		children: [
			{
				path: 'classic',
				name: 'Classic',
				component: () => import('../views/form/classic.vue'),
				meta: {
					title: '经典表单',
					icon: 'ContainerOutlined',
					roles: ['admin']
				},
			},
		]
	},
	{
		// https://next.router.vuejs.org/guide/migration/index.html#removed-star-or-catch-all-routes
		path: '/:path(.*)*',
		name: 'NotFound',
		hidden: true,
		component: () => import('../views/error/404.vue')
	}
]
