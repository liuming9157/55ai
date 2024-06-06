<template>
	<div>
		<div class="text-center md:text-4xl font-bold my-8">发现最新最好用的AI产品</div>
		<div class=" flex justify-center items-center my-8">
			<div class="w-full md:w-1/2">
				<el-input class=" input" placeholder="搜索最好的AI产品"  @keydown.enter="search" v-model="keyword"
					size="large">
					<template #suffix>
						<el-icon class="cursor-pointer" @click="search">
							<el-icon-search></el-icon-search>
						</el-icon>
					</template>
				</el-input>

			</div>

		</div>
		<div class="my-4">
			<span class="text-lg font-bold">今日最新产品</span>
			<span class="ml-4 text-gray-400">更新时间：{{timeAgo}}</span>
		</div>
		<div class="grid md:grid-cols-4 gap-4">
			<div class="rounded-lg p-2  hover:border-blue-500 hover:border-2 " v-for="(item, index) in tools" :key="index">
				<img class="w-full h-48 object-cover"
					:src="item.image" />
				<div class="font-bold my-2">{{ item.title }}</div>
				<div class="my-2 text-sm">{{ item.subtitle }}</div>
				<div class="text-gray-500 text-xs line-clamp-3">{{ item.description }}</div>
			</div>
		</div>
	</div>
</template>
<script setup>
useSeoMeta({
	title: '55AI-好用的AI产品和应用大全',
	ogTitle: '55AI-好用的AI产品和应用大全',
	description: '出国留学考试在线模考平台，打开网站就能刷题。托福、雅思、SAT、GRE考试学习测评，海量真题提分',
	ogDescription: '出国留学考试在线模考平台，打开网站就能刷题。托福、雅思、SAT、GRE考试学习测评，海量真题提分',
	ogImage: '/logo.svg',
})

const router = useRouter()
const keyword = ref('')

const { data:tools} = await useFetch('/api/tools')
const search = async () => {
	const res = await $fetch('/api/tools',{params:{keyword:keyword.value}})
	tools.value=res

}
import { useTimeAgo } from '@vueuse/core'

const timeAgo = useTimeAgo(new Date(tools.value[0].created_at))


</script>
<style>
.input {
	--el-input-hover-border-color: #409eff;
	line-height: 8;
	height:60px
}
</style>
