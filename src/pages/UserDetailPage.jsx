import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/UI/Button'

const UserDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="detailsSubstrate">
      <h2>User Details</h2>
      <p>Displaying information for user with ID: {id}</p>
      <Button onClick={() => navigate('/users')}>Go back to list</Button>
    </div>
  )
}

export default UserDetailPage
