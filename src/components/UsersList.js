import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useThunk } from '../hooks/useThunk';
import { fetchUsers, addUser } from '../store';

// components
import Skeleton from './Skeleton';
import Button from './Button';
import UsersListItem from './UsersListItem';



function UsersList() {
	const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
	const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
	
	const { data } = useSelector((state) => {
		return state.users;
	})

	useEffect(() => {
		doFetchUsers();
	}, [doFetchUsers]);

	const handleUserAdd = () => {
		doCreateUser();
	}

	let content;
	if(isLoadingUsers) {
		content = <Skeleton times={6} className="w-full h-10" />;
	} else if (loadingUsersError) {
		content = <div>Error fetching data.</div>
	} else {
		content = data.map((user) => {
			return (
				<UsersListItem key={user.id} user={user} />
			)
		})
	}

	return(
		<div>
			<div className="flex flex-row justify-between items-center my-3">
				<h1 className="m-2 text-xl">Users</h1>
				<Button
					primary
					loading={isCreatingUser}
					onClick={handleUserAdd}
					className="cursor-pointer"
				>
					+ Add User
				</Button>
				{ creatingUserError && 'error creating user' }
			</div>
			{ content }
		</div>
	)
}

export default UsersList;