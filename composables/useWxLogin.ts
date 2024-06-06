const appConfig=useAppConfig();
export const useWxLogin = () => {
	const query = {
		self_redirect: true,
		appid: appConfig.weixin.appid,
		scope: "snsapi_login",
		redirect_uri: "",
		state: "wechat",
		style: "black",
		href: "",
		login_type: "jssdk",
		styletype: '',
		sizetype: '',
		rst: ''

	};
	let _result = [];
	for (let key in query) {
		let value = query[key];
		_result.push(key + '=' + value);
	}
	const queryStr = _result.join('&');
	const url = ref('');
	url.value="https://open.weixin.qq.com/connect/qrconnect?" + queryStr;
	return url;
}