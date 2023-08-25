/** @format */
// const getCroppedImageUrl = (url: string, x:number, y:number) => {
const getCroppedImageUrl = (url: string) => {
	const target = 'media/';
	const index = url.indexOf(target) + target.length;

	const newUrl = url.slice(0, index) + 'crop/600/400/' + url.slice(index);
	// const newUrl = url.slice(0, index) + `crop/${x}/${y}/` + url.slice(index);
	return newUrl;
};

export default getCroppedImageUrl;

