import wepy from 'wepy'
export default class HttpRequest {
	
	static getMusicList = (type, offset) => {
		let size = 20;
		return wepy.request({
			url: 'https:\/\/tingapi.ting.baidu.com/v1/restserver/ting',
			method: "GET",
			data: {
				type: type,
				method: 'baidu.ting.billboard.billList',
				size: size,
				offset: offset,
			},
			dataType: "json",
		});
	}

	static getMusicInfo = (songId) => {
		return wepy.request({
			url: 'http:\/\/tingapi.ting.baidu.com/v1/restserver/ting',
			method: 'GET',
			data: {
				method: 'baidu.ting.song.play',
				songid: songId,
			},
		});
	}
}