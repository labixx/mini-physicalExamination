import store from "../store";

let ajaxTimes=0;
// 封装请求方法，并向外暴露该方法
export const http = (options)=>{
	// 解构请求头参数
	let header = {...options.header};
	// 当前请求不是登录时，在header中加上后端返回的token
	if(options.url != '/admin/app/login'){
	    header["Authorization"] = store.state.token;
	}
	ajaxTimes++;
	// 显示加载中 效果
	uni.showLoading({
		title: "加载中",
	    mask: true,
	});
	return new Promise((resolve,reject)=>{
		uni.request({
			url:options.url,
			method: options.method || 'POST',
			data: options.data || {},
			header,
			success: (res)=>{
				if (res.data.code == 200) {
				} else if (res.data.code == 401) {
					
				} else {
					uni.showToast({
						icon: 'error',
						title: res.data.message,
					})
				}
				resolve(res.data)
			},
			fail: (err)=>{
				reject(err)
			},
			// 完成之后关闭加载效果
			complete:()=>{
				ajaxTimes--;
				if(ajaxTimes===0){
			        //  关闭正在等待的图标
			        uni.hideLoading();
			    }
			}
		})
	})
}
