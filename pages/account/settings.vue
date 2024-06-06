<template>
	<div class="p-5">
		<el-tabs >
			<el-tab-pane label="基本设置">
				<div class="mx-5">
					<div class="text-xl mb-5">基本设置</div>
					<div class="md:flex md:flex-row-reverse">
						<div class='flex flex-col items-center md:w-1/2'>
							<el-avatar :size="100" class="m-5" :src="user.avatar"></el-avatar>
							<el-button type="primary" @click="dialogVisible=true">更换头像</el-button>

						</div>
						<el-form class='md:w-1/2' label-position="top">
							<el-form-item label="手机">
								<el-input v-model="user.mobile"></el-input>
							</el-form-item>
							<el-form-item label="昵称">
								<el-input v-model="user.nickname"></el-input>
							</el-form-item>
						</el-form>
					</div>
				</div>


			</el-tab-pane>
			<el-tab-pane label="安全设置">
				<div class="mx-5">
					<div class="text-xl mb-5">安全设置</div>
					<div class="border-b">
						<div class=" flex justify-between mt-4">
							<div>账户密码</div>
							<el-button link type="primary">修改</el-button>
						</div>
						<div class="text-gray-500 mb-4">当前密码强度：强</div>
					</div>
					<div class="border-b">
						<div class=" flex justify-between mt-4">
							<div>密码手机</div>
							<el-button link type="primary">修改</el-button>
						</div>
						<div class="text-gray-500 mb-4">已绑定手机：166****6889</div>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="账号绑定">
				<div class="mx-5">
					<div class="text-xl mb-5">账号绑定</div>
					<div class="border-b">
						<div class=" flex justify-between mt-4">
							<div>绑定微信</div>
							<el-button link type="primary">绑定</el-button>
						</div>
						<div class="text-gray-500 mb-4">当前未绑定微信账号</div>
					</div>		
				</div>
			</el-tab-pane>
			<el-tab-pane label="消息通知">
				<div class="mx-5">
					<div class="text-xl mb-5">新消息通知</div>
					<div class="border-b">
						<div class=" flex justify-between mt-4">
							<div>账户密码</div>
							<el-switch v-model="accountMsg" inline-prompt active-text="开" inactive-text="关" />
						</div>
						<div class="text-gray-500 mb-4">其他用户的消息将以站内信的形式通知</div>
					</div>
					<div class="border-b">
						<div class=" flex justify-between mt-4">
							<div>系统消息</div>
							<el-switch v-model="systemMsg" inline-prompt active-text="开" inactive-text="关" />
						</div>
						<div class="text-gray-500 mb-4">系统消息将以站内信的形式通知</div>
					</div>
					<div class="border-b">
						<div class=" flex justify-between mt-4">
							<div>待办任务</div>
							<el-switch v-model="taskMsg" inline-prompt active-text="开" inactive-text="关" />
						</div>
						<div class="text-gray-500 mb-4">待办任务将以站内信的形式通知</div>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script setup>
	useHead({
		title: '个人设置'
	});

	const user = ref({
		nickname: '',
		mobile: '',
		avatar:''
	});
	// 更换头像
	const dialogVisible=ref(false);

	const accountMsg=ref(true);
	const systemMsg=ref(true);
	const taskMsg=ref(true);
	
</script>