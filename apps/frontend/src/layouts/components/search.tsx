import { Input } from 'component-library'
import { FC } from 'react'
import SearchIcon from '@/assets/svg/search.svg'

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  return (
    <div className='relative w-full ml-2'>
      <Input placeholder='Search for anything...' className='h-10 pr-14 w-full border-none' />
      <div>
        <SearchIcon className='h-8 w-8 absolute right-4 top-1/2 bottom-1/2 my-auto fill-disabled' />
      </div>
    </div>
  )
}

export default Search
