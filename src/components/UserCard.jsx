import './styles/UserCard.css';
import Swal from 'sweetalert2';
const UserCard = ({ user, deleteUser, setUserSelected, setFormIsOpen }) => {
	const handleDelete = () => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				deleteUser(user.id);
				Swal.fire({
					title: 'User Deleted!',
					text: `User ${user.first_name} ${user.last_name} has been deleted.`,
					icon: 'success',
				});
			}
		});
	};
	const handleEdit = () => {
		setUserSelected(user);
		setFormIsOpen(true);
	};

	return (
		<article className="user">
			<img
				className="user__img"
				src={user.image_url}
				alt={`${user.first_name} ${user.last_name}`}
			/>
			<h3 className="user__name">
				{user.first_name} {user.last_name}
			</h3>
			<hr className="user__hr" />
			<ul className="user__list">
				<li className="user__item">
					<span className="user__label">Email</span>
					<span className="user__value">{user.email}</span>
				</li>
				<li className="user__item">
					<span className="user__label">Birthday</span>
					<span className="user__value">{user.bithday}</span>
				</li>
			</ul>
			<footer className="user__footer flex-container">
				<button className="user__btn user__delete" onClick={handleDelete}>
					Delete
				</button>
				<button className="user__btn user__edit" onClick={handleEdit}>
					Edit
				</button>
			</footer>
		</article>
	);
};

export default UserCard;
