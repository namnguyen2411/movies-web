import { Menu, Search, X } from 'lucide-react'
import { useState } from 'react'
import MobileNavigationMenu from '@/components/Header/components/MobileNavigationMenu'
import { Button } from '@/components/ui/button'
import UserMenu from '@/features/auth/components/UserMenu'
import SearchBar from '@/features/search/components/SearchBar'
import type { SearchProps } from '@/features/search/components/SearchBar/SearchBar'
import Logo from '../Logo'

const MobileHeader = ({ searchValue, setSearchValue }: SearchProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleCloseSearchBar = () => {
    setIsMobileSearchOpen(false)
  }

  return (
    <div className="flex items-center justify-between gap-6 min-[480px]:gap-8 lg:gap-10 xl:hidden">
      {!isMobileSearchOpen && (
        <>
          <div className="animate-in slide-in-from-left flex flex-1 items-center justify-between duration-300">
            {/* Mobile Menu Button */}
            <Button
              title="Menu"
              variant={'ghost'}
              size={'icon'}
              className="z-20 flex items-center justify-center xl:hidden"
              onClick={toggleMobileMenu}
            >
              <Menu
                className={`absolute size-7 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`}
              />
              <X
                color="red"
                className={`absolute size-7 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`}
              />
            </Button>

            {/* Mobile Navigation Menu */}
            <MobileNavigationMenu isMobileMenuOpen={isMobileMenuOpen} />

            <Logo />

            {/* Search Button */}
            <div onClick={() => setIsMobileSearchOpen(true)}>
              <button className="block md:hidden" title="Tìm kiếm">
                <Search size={22} className="stroke-3" />
              </button>
              <Button variant="default" size="lg" className="hidden max-h-9 text-base md:flex xl:hidden">
                <Search className="mr-2 stroke-3" size={20} />
                Tìm kiếm
              </Button>
            </div>
          </div>

          <UserMenu />
        </>
      )}

      {/* Mobile Search Bar */}
      {isMobileSearchOpen && (
        <div className="animate-in slide-in-from-left flex h-[60px] flex-1 items-center space-x-4 duration-300 xl:hidden">
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

          <Button onClick={handleCloseSearchBar} size={'icon'} variant={'ghost'} className="size-12">
            <X color="red" className="size-7" />
          </Button>
        </div>
      )}
    </div>
  )
}
export default MobileHeader
