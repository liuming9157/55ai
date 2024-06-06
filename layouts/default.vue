<template>
	<div>
		<el-container>
			<el-header class="flex justify-between">
				<div class="flex items-center">
				<!-- <img class="" src="/logo.svg" /> -->
				<nuxt-link class="text-2xl font-bold text-blue-500" to="/">55AI</nuxt-link>

				</div>
				<el-menu mode="horizontal" :ellipsis="false">

					<el-menu-item index="1"><nuxt-link to="/" class="md:text-lg">首页</nuxt-link></el-menu-item>
					<el-menu-item index="2"><nuxt-link to="/prodct" class="md:text-lg">产品</nuxt-link></el-menu-item>
					<el-menu-item index="3"><nuxt-link to="/app" class="md:text-lg">应用</nuxt-link></el-menu-item>
					<el-menu-item index="4"><nuxt-link to="/market" class="md:text-lg">市场</nuxt-link></el-menu-item>
					<el-menu-item index="5"><nuxt-link to="/promote" class="md:text-lg">推广</nuxt-link></el-menu-item>

				</el-menu>
				<div class="flex items-center justify-end overflow-hidden">
					<client-only>
						<el-button v-if="!user" type="primary" @click="router.push('/login')">登录/注册</el-button>
						<el-dropdown v-else class="ml-2">
							<el-avatar :src="user.avatar" style="outline: none;"></el-avatar>
							<template #dropdown>
								<div class="w-96 rounded-xl bg-white p-4">
									
									<div class="mb-4 cursor-pointer" @click="router.push('/account/settings')">
										账号设置
									</div>
									<div class="cursor-pointer" @click="signOut">退出登录</div>
								</div>
							</template>
						</el-dropdown>

					</client-only>

				</div>


			</el-header>
			<el-container>
				<el-main class="main">
					<div class="flex justify-center ">
						<div class="lg:w-3/4">
							<slot />

						</div>

					</div>
					<client-only>
						<el-affix class="float-right" position="bottom" :offset="90">
							<el-dropdown placement="top">
								<el-icon size="50" color="#00f" style="outline: none;">
									<el-icon-question-filled></el-icon-question-filled>
								</el-icon>
								<template #dropdown>
									<el-dropdown-menu>
										<el-dropdown-item>
											<div class="flex flex-col items-center">
												<div class="font-bold">提建议、提需求</div>
												<div>扫码联系作者</div>
												<el-image class="w-40 h-40"
													src="https://alioss-cdn.mzyun.tech/common/qrcode.jpg"></el-image>

											</div>
										</el-dropdown-item>
									</el-dropdown-menu>
								</template>
							</el-dropdown>
						</el-affix>
					</client-only>
				</el-main>
				
			</el-container>
		</el-container>

	</div>
</template>
<script setup>
const router = useRouter();


const supabase = useSupabaseClient()


const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.log(error)
}

const user = useSupabaseUser()



</script>
<style>
.main {
	height: calc(100vh - 120px);
	background-color: aliceblue;
}
</style>