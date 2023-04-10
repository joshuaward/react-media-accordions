import { useFetchPhotosQuery, useAddPhotoMutation } from '../store';
import PhotosListItem from './PhotosListItem';
import Skeleton from './Skeleton';
import Button from './Button';

function PhotosList({ album }) {
	const { data, isFetching, error } = useFetchPhotosQuery(album);
	const [ addPhoto, addPhotoResults ] = useAddPhotoMutation();

	const handleAddPhoto = () => {
		addPhoto(album);
	}

	let content;
	if(isFetching) {
		return <Skeleton className="flex flex-row justify-center w-8 h-8" times={4} />
	} else if(error) {
		return <div>Error fetching photos...</div>
	} else {
		content = data.map(photo => {
			return <PhotosListItem key={photo.id} photo={photo} />
		})
	}

	return (
		<div>
			<div className="flex flex-row justify-between items-center m2">
				<h3 className="text-lg font-bold">Photos in {album.title}</h3>
				<Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>+ Add Photo</Button>
			</div>
			<div className="flex flex-row flex-wrap justify-center gap-4 mt-4">
				{content}
			</div>
		</div>
	)
}

export default PhotosList;