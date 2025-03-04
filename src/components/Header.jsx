import { NavLink } from 'react-router-dom'
import Button from './UI/Button'

const Header = () => {
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
            <NavLink to="users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <Button>Get random user</Button>
    </>
  )
}

export default Header
