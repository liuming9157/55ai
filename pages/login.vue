<template>
    <div>
        <div class="flex justify-center">
            <div class="w-96 mt-24">
                <div class="text-3xl text-center">登录</div>
                <div class="login-box-header-form">
                    <el-input class='my-4' v-model="form.email" placeholder="请输入邮箱" @keydown.enter="signIn"></el-input>
                    <el-button class="w-full" type="primary" size="large" @click="signIn">登录</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const form = ref({ email: '' })
const supabase = useSupabaseClient()

const signIn = async () => {
    const loadingInstance = ElLoading.service()
    const { data, error } = await supabase.auth.signInWithOtp({
        email: form.value.email,
    })
    if(data){
        loadingInstance.close()
        ElMessageBox.confirm('登录链接已发送，请前往邮箱查收');
    }
}

</script>