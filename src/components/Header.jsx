import { NavLink, useNavigate } from 'react-router-dom'
import Button from './UI/Button'

const Header = () => {
  const navigate = useNavigate()

  const handleGettingRandomUser = () => {
    navigate(`users/${Math.floor(Math.random() * 9) + 1}`)
  }

  return (
    <>
      <a href="/" className="headerLogo">
        <h1>USERS_API</h1>
      </a>
      <nav className="headerMenu">
        <ul className="headerMenuList">
          <li className="headerMenuLink">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="headerMenuLink">
            <NavLink to="users">List</NavLink>
          </li>
        </ul>
      </nav>
      <Button onClick={handleGettingRandomUser}>Get random user</Button>
    </>
  )
}

export default Header
