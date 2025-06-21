import { Link } from 'react-router'

const Logo = () => {
  return (
    <Link to="/">
      <img src="/logo.png" alt="logo" className="h-[60px]" />
    </Link>
  )
}
export default Logo
