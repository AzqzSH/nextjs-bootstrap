export function getAge(dateString: string) {
	var birthday = +new Date(dateString);
	return ~~((Date.now() - birthday) / 31557600000);
}
