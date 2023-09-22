/** @format */
// the api has this crop option but do not accept all values as Params, this is why the values are hardcoded :D
import noImage from '../assets/ImagePlaceholder/no-image-placeholder-black.png';
const getCroppedImageUrl = (url: string) => {
	if (!url) return noImage;
	const target = 'media/';
	const index = url.indexOf(target) + target.length;
	const newUrl = url.slice(0, index) + 'crop/600/400/' + url.slice(index);
	return newUrl;
};

export default getCroppedImageUrl;

