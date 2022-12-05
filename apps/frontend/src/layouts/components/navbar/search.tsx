import { FC } from 'react'
import SearchIcon from '@/assets/svg/search.svg'
import { Input } from 'component-library'

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  return (
    <div className='relative w-1/2 hidden lg:block'>
      <Input
        placeholder='Search for anything...'
        className='h-10 pr-14 w-full'
        backgroundColor='background'
        border='none'
      />
      <SearchIcon className='h-8 w-8 absolute right-4 top-1/2 bottom-1/2 my-auto fill-disabled' />
    </div>
  )
}

export default Search
