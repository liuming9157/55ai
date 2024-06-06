import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      isLogin: false,
      userInfo: {
        nickname: '',
        mobile: '',
        token: ''
      }
    }
  },
  actions: {
    login(payload: object) {
      this.isLogin = true;
      this.userInfo = payload;
    },
    logout() {
      this.isLogin = false;
      this.userInfo = {};
      ElMessage.success('已退出')
    }
  },
  persist: {
    storage: persistedState.localStorage
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
