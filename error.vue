<template>
	<div class="flex flex-col items-center">
		<img class="w-96" :src="`/${error.statusCode}.svg`" />
		<div class="m-2">{{ error.statusCode==404?'抱歉，你访问的页面不存在':'抱歉，服务器出小差了' }}</div>
		<div class="text-sm text-slate-500 m-2">错误信息：{{ error.message }}</div>
		<nuxt-link to="/" class="m-2">
			<el-button type="primary">回到首页</el-button>
		</nuxt-link>
	</div>
</template>
<script setup>
const props = defineProps({
	error: Object
})
useHead({
	titleTemplate:()=>props.error.statusCode
})
</script>