import { useRemoveAlbumMutation } from '../store';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import { GoTrashcan } from 'react-icons/go';
import PhotosList from './PhotosList';

function AlbumsListItem({ album }) {
	const [ removeAlbum, results ] = useRemoveAlbumMutation();

	const handleRemoveAlbum = () => {
		removeAlbum(album);
	}

	const header = <div className="flex items-center">
		<Button rounded outline className="w-10 h-10 mr-3 text-white bg-gray-400 hover:bg-red-500 scale-75 hover:scale-100 transition-transform duration-200" onClick={handleRemoveAlbum} loading={results.loading}>
			<GoTrashcan />
		</Button>
		{album.title}
	</div>
	
	return (
		<ExpandablePanel key={album.id} header={header}>
			<PhotosList album={album} />
		</ExpandablePanel>
	)
}

export default AlbumsListItem;