<!--
 * @Author: mingxing.huang
 * @Date: 2020-10-29 20:56:05
-->
<template>
	<div class="dashboard-box">
		<a-list :grid="{ gutter: 16, column: 1}" :data-source="data">
			<template v-slot:renderItem="{ item }">
				<a-list-item class="list-item">
					<a-card :title="item.title">
						<a-skeleton v-if="showSkeleton" active />
						<template v-else>
							{{ item.des }} <a target="_blank" :href="item.url">去选择年级</a>
						</template>
					</a-card>
				</a-list-item>
			</template>
		</a-list>
	</div>
</template>

<script>
import { ref } from 'vue'
export default {
	setup() {
		const showSkeleton = ref(true)
		setTimeout(() => {
			showSkeleton.value = false
		}, 800)
		const data = ref([
			{
				title: '语文教材PDF预览',
				url: './XyPdfviewer.html',
				des:
					'来自教育部主办的智慧教育平台'
			},
			{
				title: '数学教材PDF预览',
				url: './XsPdfviewer.html',
				des: '人教版2022新版已有线上电子书，旧版已下线，此处以北师大版本替代'
			},
			{
				title: '英语教材PDF预览',
				url: './XePdfviewer.html',
				des: '广州教学用书'
			}

		])
		return { data, showSkeleton }
	}
}
</script>

<style lang="less">
.dashboard-box {
	.ant-card-bordered {
		&:hover {
			box-shadow: rgba(@primary-color, 0.8) 0px 0px 2px 2px;
			// border-color: @primary-color;
		}
	}
}
</style>
