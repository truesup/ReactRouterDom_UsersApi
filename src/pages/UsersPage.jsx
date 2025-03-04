import { useLoaderData } from 'react-router-dom'

const UsersPage = () => {
  const usersList = useLoaderData()
  console.log(usersList)

  return (
    <div className="usersListContainer">
      {usersList.map(user => (
        <div className="userInfoSubstrate" key={user.customID}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      ))}
    </div>
  )
}

export default UsersPage
