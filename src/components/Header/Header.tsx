import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import DesktopHeader from './components/DesktopHeader'
import MobileHeader from './components/MobileHeader'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', () => setIsScrolled(window.scrollY > 0))
  }, [])

  return (
    <header
      className={cn('text-foreground sticky top-0 z-20 h-[80px] px-3 py-1.5 md:px-6 md:py-2.5', {
        'md:bg-header-bg': isScrolled,
        'bg-transparent': !isScrolled
      })}
    >
      <MobileHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      <DesktopHeader searchValue={searchValue} setSearchValue={setSearchValue} />
    </header>
  )
}
export default Header
