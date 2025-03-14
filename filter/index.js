/**
 * 转换11位电话号码，给中间加上空格
 */
export function formatTel(tel = '') {
	tel = String(tel);
	if (tel.length != 11) {
		return tel
	} else {
		const start = tel.substring(0, 3)
		const inter = tel.substring(3, 7)
		const end = tel.substring(7, 11)
		return start + ' ' + inter + ' ' + end
	}
}
export function formatTime(timestamp, format = 'YYYY-MM-DD hh:mm:ss') {
	const date = new Date(timestamp * 1000); // 如果时间戳是秒级，需乘以1000
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 补零
	const day = date.getDate().toString().padStart(2, '0');
	const hour = date.getHours().toString().padStart(2, '0');
	const minute = date.getMinutes().toString().padStart(2, '0');
	const second = date.getSeconds().toString().padStart(2, '0');

	return format
		.replace('YYYY', year)
		.replace('MM', month)
		.replace('DD', day)
		.replace('hh', hour)
		.replace('mm', minute)
		.replace('ss', second);
}