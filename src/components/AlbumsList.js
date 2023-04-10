import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton';
import AlbumsListItem from "./AlbumsListItem";
import Button from './Button';

function AlbumsList({ user }) {
	const { data, error, isFetching } = useFetchAlbumsQuery(user);
	const [addAlbum, results] = useAddAlbumMutation();

	const handleAddAlbum = () => {
		addAlbum(user);
	}

	let content;
	if(isFetching) {
		content = <Skeleton className="w-full h-10" times={3} />
	} else if(error) {
		content = <div>Error loading albums...</div>
	} else {
		content = data.map(album => {
			return <AlbumsListItem key={album.id} album={album} />
		})
	}

	return(
		<div>
			<div className="flex justify-between items-center mb-4 mx-2">
				<h3 className="text-lg font-bold">Albums for {user.name}</h3>
				<Button success outline onClick={handleAddAlbum} loading={results.isLoading}>+ Add Album</Button>
			</div>
			<div>{content}</div>
		</div>
	)
}

export default AlbumsList;