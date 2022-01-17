import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
	const USERS = [
		{
			id: 'u1',
			name: 'Ben Kakengi',
			image:
				'https://www.oldhouseonline.com/wp-content/uploads/sites/2/2021/01/haunted-house-opener.jpg',
			places: 3,
		},
	];
	return <UserList items={USERS} />;
};

export default Users;
