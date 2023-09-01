/** @format */
import noImage from '../assets/ImagePlaceholder/no-image-placeholder-6f3882e0.webp'
const getCroppedImageUrl = (url: string) => {
	if (!url) return  noImage ;
	const target = 'media/';
	const index = url.indexOf(target) + target.length;
	const newUrl = url.slice(0, index) + 'crop/600/400/' + url.slice(index);
	// const newUrl = url.slice(0, index) + `crop/${x}/${y}/` + url.slice(index);
	return newUrl;
}; 

export default getCroppedImageUrl;


