import { CircleX } from 'lucide-react'

interface ClearSearchProps {
  searchValue: string
  handleClearSearch: () => void
}

const ClearSearch = ({ searchValue, handleClearSearch }: ClearSearchProps) => {
  return (
    <>
      {searchValue && (
        <CircleX
          className="text-foreground absolute right-3 mr-2 cursor-pointer"
          size={20}
          onClick={handleClearSearch}
        />
      )}
    </>
  )
}
export default ClearSearch
