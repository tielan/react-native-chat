module.exports = {
	//common
	// personal: require('./commonMgr/PersonalMgr.js'),
	// net: require('./commonMgr/NetMgr.js'),
	settingMgr: require('./commonMgr/SettingMgr.js'),
	// media:require('./commonMgr/MediaMgr.js'),
	//pay
	// alipay: require('./payMgr/AlipayMgr.js'),
	// wxpay: require('./payMgr/WXpayMgr.js'),
	//chat
	// call: require('./callMgr/CallMgr'),
	// group: require('./groupMgr/GroupMgr'),
	// message: require('./messageMgr/MessageMgr'),
	// router: require('./socketMgr/Router'),
	socketMgr: require('./socketMgr/SocketMgr'),
	// notify: require('./userMgr/NotifyMgr'),
	loginMgr: require('./userMgr/LoginMgr'),
	// user: require('./userMgr/UserMgr'),
};