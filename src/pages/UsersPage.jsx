import { Link, useLoaderData } from 'react-router-dom'

const UsersPage = () => {
  const usersList = useLoaderData()

  return (
    <div className="usersListContainer">
      {usersList.map(user => (
        <div className="userInfoSubstrate" key={user.customID}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
          <Link className="userAnchor" to={`/users/${user.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  )
}

export default UsersPage
