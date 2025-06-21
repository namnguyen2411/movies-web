import { Outlet } from 'react-router'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[100vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default Layout
