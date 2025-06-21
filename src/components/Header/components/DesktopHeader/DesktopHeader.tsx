import UserMenu from '@/features/auth/components/UserMenu'
import SearchBar from '@/features/search/components/SearchBar'
import type { SearchProps } from '@/features/search/components/SearchBar/SearchBar'
import DesktopNavigationMenu from '../DesktopNavigationMenu'
import Logo from '../Logo'

const DesktopHeader = ({ searchValue, setSearchValue }: SearchProps) => {
  return (
    <div className="hidden items-center justify-between xl:flex">
      <Logo />

      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

      <DesktopNavigationMenu />

      <UserMenu />
    </div>
  )
}
export default DesktopHeader
