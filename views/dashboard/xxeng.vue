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
							{{ item.des }} <a target="_blank" :href="item.url">音频</a>
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
				title: '广州英语口语',
				url: './XeMp3viewer.html',
				des:
					'来源于广州数字教育网下载的文件'
			},
                        {
                                title: '培生儿童分级英语1级',
                                url: './PsMp3viewer.html',
                                des:
                                        '来自培生儿童英语系列光盘转换Mp3'
                        },
			{
				title: '培生儿童分级英语3级',
				url: './Ps3Mp3viewer.html',
				des:
					'来自培生儿童英语系列光盘转换Mp3'
			},
                        {
                                title: '培生儿童分级英语5级',
                                url: './Ps5Mp3viewer.html',
                                des:
                                        '来自培生儿童英语系列光盘转换Mp3'
                        }

/*,
			{
				title: '国家智慧教育公共服务平台',
				url: 'https://basic.smartedu.cn/syncClassroom',
				des: '课程教学'
			}
*/
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
