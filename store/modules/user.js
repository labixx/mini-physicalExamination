import { login } from '../../api/login.js'

const user = {
  state: {
    token: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const userName = userInfo.userName.trim()
      const password = userInfo.password
      return new Promise((resolve, reject) => {
        login(userName, password).then(res => {
          const {data} = res
          commit('SET_TOKEN', data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // // 获取用户信息
    // GetInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getInfo().then(res => {
    //       const { roles, user, permissions } = res.data
    //       const avatar = user.avatar == null ? require("@/assets/images/profile.jpg") : user.avatar;
    //       if (roles && roles.length > 0) { // 验证返回的roles是否是一个非空数组
    //         commit('SET_ROLES', roles)
    //         commit('SET_PERMISSIONS', permissions) //按钮权限
    //       } else {
    //         commit('SET_ROLES', ['ROLE_DEFAULT'])
    //       }
    //       commit('SET_NAME', user.userName)
    //       commit('SET_AVATAR', avatar)
    //       commit('SET_USERID',user.userId)
    //       resolve(res)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // // 刷新token
    // RefreshToken({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     refreshToken(state.token).then(res => {
    //       setExpiresIn(res.data)
    //       commit('SET_EXPIRES_IN', res.data)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // // 退出系统
    // LogOut({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('SET_TOKEN', '')
    //       commit('SET_ROLES', [])
    //       commit('SET_PERMISSIONS', [])
    //       removeToken()
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // // 前端 登出
    // FedLogOut({ commit }) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', '')
    //     removeToken()
    //     resolve()
    //   })
    // }
  }
}

export default user
