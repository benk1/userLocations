import React from 'react';

import Card from '../../shared/components/Card';
import UserItem from './UserItem';
import './UserList.css';

const UserList = ({ items }) => {
	if (items.length === 0) {
		return (
			<div className="center">
				<Card>
					<h2>No users found!!</h2>
				</Card>
			</div>
		);
	}

	return (
		<ul className="users-list">
			{items.map((user) => {
				return (
					<UserItem
						key={user.id}
						id={user.id}
						image={user.image}
						name={user.name}
						placeCount={user.places}
					/>
				);
			})}
		</ul>
	);
};

export default UserList;
