import { removeUser } from '../store/thunks/removeUser';
import { useThunk } from '../hooks/useThunk';

// components
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';
import { GoTrashcan } from 'react-icons/go';

function UsersListItem({ user }) {
	const [doRemoveUser, isLoading, error] = useThunk(removeUser);

	const handleClick = () => {
		doRemoveUser(user);
	}

	const header = <>
		<Button className="w-10 h-10 mr-3 text-white bg-gray-400 hover:bg-red-500 scale-75 hover:scale-100 transition-transform duration-200" rounded loading={isLoading} onClick={handleClick}>
			<GoTrashcan  />
		</Button>
		{error && <div>Error deleting User...</div>}
		<div className="grow">{user.name}</div>
	</>

	return(
		<ExpandablePanel header={header}>
			<AlbumsList user={user} />
		</ExpandablePanel>
	)
}

export default UsersListItem;