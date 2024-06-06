<template>
    <div class="h-half-screen bg-white rounded-xl flex overflow-hidden">
        <el-image src="https://superox.cn/assets/img/login-img.png" />
        <div class="flex-1 flex flex-col  items-center">
            <div class="text-xl font-bold mt-20 mb-4">手机验证码登录</div>
            <div class="w-64">
                <el-input class="mb-4 input-hover" v-model="form.mobile" placeholder="输入手机号" size="large"></el-input>
                <div class="flex mb-4">
                    <el-input class="input-hover mr-1" v-model="form.captcha" placeholder="输入验证码" size="large"
                        @keydown.enter="submit"></el-input>
                    <el-button type='primary' plain size="large" @click="sendCode" :disabled="time > 0">{{ codeText
                    }}</el-button>
                </div>
                <el-button class='w-full' @click="submit" type='primary' size="large">登录/注册</el-button>
            </div>



            <div class="text-sm mt-5">登录代表同意{{ appConfig.app.name }}<a class="text-blue-500"
                    :href="appConfig.app.userAgreement" target="_blank">用户协议</a>、<a class="text-blue-500"
                    :href="appConfig.app.privacyPolicy" target="_blank">隐私政策</a></div>
        </div>
    </div>
</template>
<script setup>
const store = useUserStore();

const appConfig = useAppConfig();

const emit = defineEmits(['close'])


const form = ref({
    mobile: '',
    captcha: ''
});

const codeText = ref('获取验证码');
const time = ref(0)

const regEx = /^[1][\d]{10}$/

const sendCode = async () => {
    if (!regEx.test(form.value.mobile)) {
        ElMessage.error('请填写正确的手机号码');
        return false;
    }
    const { data } = await usePost('/api/sms/send', { mobile: form.value.mobile, event: 'login' });

    ElMessage.success('发送成功');

    time.value = 60;
    let timer = setInterval(() => {
        time.value--;
        codeText.value = time.value + "秒后获取"
        if (time.value == 0) {
            clearInterval(timer)
            codeText.value = '获取验证码';
        }
    }, 1000)

}

const submit = async () => {
    if (!regEx.test(form.value.mobile)) {
        ElMessage.error('手机号格式错误');
        return false;
    }
    if (form.value.captcha.length != 4) {
        ElMessage.error('验证码错误');
        return false;

    }
    const { data } = await usePost('/api/user/mobilelogin', form, { watch: false });
    store.login(data.value.data.userinfo)
    ElMessage.success('登录成功');
    emit('close')
   




}
</script>
<style>
.h-half-screen {
    height: 60vh;
}

.input-hover {
    --el-input-hover-border-color: #409eff
}
</style>