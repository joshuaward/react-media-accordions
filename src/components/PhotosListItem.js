import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

function PhotosListItem({ photo }) {
	const [removePhoto] = useRemovePhotoMutation();
	
	const handleRemovePhoto = () => {
		removePhoto(photo);
	}

	return (
		<div className="relative cursor-pointer" onClick={handleRemovePhoto}>
			<img className="inline-block w-20 h-20" src={photo.url} alt="Random Pic" />
			<div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80 transition-opacity duration 200">
				<GoTrashcan />
			</div>
		</div>
	)
}

export default PhotosListItem;