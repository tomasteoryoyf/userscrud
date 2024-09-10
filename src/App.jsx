import { useState, useEffect } from 'react';
import useCrud from './hooks/useCrud.js';
import './App.css';
import FormUser from './components/FormUser';
import UserCard from './components/UserCard.jsx';

function App() {
	const [users, getUsers, createUser, deleteUser, updateUser] =
		useCrud('/users/');
	const [userSelected, setUserSelected] = useState();
	const [formIsOpen, setFormIsOpen] = useState(false);

	useEffect(() => {
		getUsers();
	}, []);

	const handleOpenForm = () => {
		setFormIsOpen(true);
	};
	return (
		<div className="app">
			<header className="user__header">
				<h1>Users CRUD</h1>
				<button onClick={handleOpenForm} className="new__user__btn">
					New User
				</button>
			</header>

			<FormUser
				createUser={createUser}
				userSelected={userSelected}
				setUserSelected={setUserSelected}
				updateUser={updateUser}
				setFormIsOpen={setFormIsOpen}
				formIsOpen={formIsOpen}
			/>
			<section className="user__container flex-container">
				{users?.map((user) => (
					<UserCard
						key={user.id}
						user={user}
						deleteUser={deleteUser}
						setUserSelected={setUserSelected}
						setFormIsOpen={setFormIsOpen}
					/>
				))}
			</section>
		</div>
	);
}

export default App;
