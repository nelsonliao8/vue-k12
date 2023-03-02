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
							{{ item.des }} <a target="_blank" :href="item.url">文档</a>
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
				title: '小学数学',
				url: 'https://download.pep.com.cn/xsxjc/22xjcsx11x/mobile/index.html',
                                des:
                                        '2022版教科书 一年级 上册'		 
		                        },
			{
				title: '小学数学',
				url: 'https://download.pep.com.cn/xsxjc/22xjcsx21x/mobile/index.html',
                                des:
                                        '2022版教科书 二年级 上册'
								},
			{
				title: '小学数学',
				url: 'https://download.pep.com.cn/xsxjc/22xjcsx31x/mobile/index.html',
				des:
					'2022版教科书 三年级 上册'
			},
			{
				title: '小学数学',
				url: 'https://download.pep.com.cn/xsxjc/22xjcsx41x/mobile/index.html',
                                des:
                                        '2022版教科书 四年级 上册'
			},		
			{
				title: '小学数学',
				url: 'https://download.pep.com.cn/xsxjc/22xjcsx51x/mobile/index.html',
                                des:
                                        '2022版教科书 五年级 上册'		 
		        },
			{
				title: '小学数学',
				url: 'https://download.pep.com.cn/xsxjc/22xjcsx61x/mobile/index.html',
                                des:
                                        '2022版教科书 六年级 上册'
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
