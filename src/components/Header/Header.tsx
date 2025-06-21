import DesktopHeader from './components/DesktopHeader'
import MobileHeader from './components/MobileHeader'

const Header = () => {
  return (
    <header className="text-foreground bg-header-bg sticky top-0 z-20 h-[80px] px-3 py-1.5 md:bg-transparent md:px-6 md:py-2.5">
      <MobileHeader />
      <DesktopHeader />
    </header>
  )
}
export default Header
