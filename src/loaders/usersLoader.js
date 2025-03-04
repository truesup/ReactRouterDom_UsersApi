import { v4 as uuidv4 } from 'uuid'

export const usersLoader = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=9')
  if (!res.ok) {
    throw new Error('Failed to fetch users')
  }
  const users = await res.json()
  return users.map(user => ({
    ...user,
    customID: uuidv4(),
  }))
}
