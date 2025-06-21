import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import ClearSearch from '../ClearSearch'

export interface SearchProps {
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ({ searchValue, setSearchValue }: SearchProps) => {
  const placeholder = 'Tìm kiếm phim'
  const generalClassName =
    'placeholder:text-base-text py-5 pr-4 pl-12 text-sm transition-all focus:ring-[1.5px]! focus:ring-white!'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleClearSearch = () => {
    setSearchValue('')
  }

  return (
    <>
      {/* Mobile Search Bar */}
      <div className="animate-in slide-in-from-left flex h-[60px] flex-1 items-center space-x-4 duration-300 xl:hidden">
        <form className="relative flex flex-1 items-center rounded-md bg-[#ffffff14]">
          <Search className="text-foreground absolute left-3" size={20} />
          <Input
            placeholder={placeholder}
            value={searchValue}
            onChange={handleChange}
            className={`${generalClassName} text-sm`}
            autoFocus
          />

          <ClearSearch searchValue={searchValue} handleClearSearch={handleClearSearch} />
        </form>
      </div>

      {/* Desktop Search Bar */}
      <form className="relative hidden items-center rounded-md bg-[#ffffff14] xl:flex">
        <Search className="text-foreground absolute left-3" size={20} />
        <Input
          placeholder={placeholder}
          value={searchValue}
          onChange={handleChange}
          className={`${generalClassName} w-[330px] 2xl:w-[380px] 2xl:text-[15px]`}
        />

        <ClearSearch searchValue={searchValue} handleClearSearch={handleClearSearch} />
      </form>
    </>
  )
}
export default SearchBar
