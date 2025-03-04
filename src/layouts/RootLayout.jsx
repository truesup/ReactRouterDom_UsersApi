import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default RootLayout
