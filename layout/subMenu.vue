<!--
 * @Author: mingxing.huang
 * @Date: 2020-10-31 14:04:01
-->
<template>
	<a-sub-menu :key="route.name">
		<template v-slot:title>
			<span
				><component :is="route.meta.icon" /><span>{{
					route.meta.title
				}}</span></span
			>
		</template>
		<template v-for="item in route.children">
			<a-menu-item
				v-if="!item.children || item.children.length === 0"
				:key="item.name"
			>
				<component :is="item.meta.icon" />
				<span>{{ item.meta.title }}</span>
			</a-menu-item>
			<sub-menu v-else :key="item.name" :route="item" />
		</template>
	</a-sub-menu>
</template>

<script>
import { ContainerOutlined } from '@ant-design/icons-vue'
import {scratchCard} from 'lzy-scratch-card'
export default {
	name: 'SubMenu',
	components: {
		ContainerOutlined,
		scratchCard
	},
	props: {
		route: {
			type: Object,
			default: () => ({})
		}
	}
}
</script>

<style lang="less" scoped>
</style>
