/*
 * @Author: nelson
 * @Date: 2020-10-29 21:45:29
 */



export function importAll(e) {
	let __modules={}
	e.keys().forEach(key => {
		let m = e(key).default
		let n = m.name;
		__modules[n] = m
     	});
 	return __modules
}
