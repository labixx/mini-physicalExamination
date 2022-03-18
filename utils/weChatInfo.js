//唤起微信授权登录
export function weChatLogin(redirectUrl){
    let APPID = '3a62cea7d02548d5afbb8b6e30bf9891'
    let REDIRECT_URI = encodeURIComponent(redirectUrl)
    //scope 两种：snsapi_userinfo：非静默授权 snsapi_base：静默授权
    let SCOPE = 'snsapi_userinfo'
window.location.href = `https://open.95516.com/s/open/html/oauth.html?appId=${APPID}&redirectUri=${REDIRECT_URI}&responseType=code&scope=${SCOPE}&state=STATE`
}

