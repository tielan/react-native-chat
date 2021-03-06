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
	// callMgr: require('./callMgr/CallMgr'),
	groupMgr: require('./groupMgr/GroupMgr'),
	messageMgr: require('./messageMgr/MessageMgr'),
	socketMgr: require('./socketMgr/SocketMgr'),
	notifyMgr: require('./userMgr/NotifyMgr'),
	loginMgr: require('./userMgr/LoginMgr'),
	userMgr: require('./userMgr/UserMgr'),
};
