import Image from 'next/image'
import { FC } from 'react'
import Location from '@/assets/svg/location.svg'
import Lightning from '@/assets/svg/lightning.svg'
import { LocationResponse } from '@/graphql/schema'

const LocationCard: FC<Partial<LocationResponse>> = ({ name, difficulty, city, country, thumbnail }) => {
  return (
    <div className='h-72 w-72 relative overflow-hidden rounded-lg'>
      {thumbnail && name && <Image src={thumbnail} alt={name} className='object-cover' fill />}
      <div className='absolute bottom-0 w-full h-1/3 p-4 flex flex-col justify-center backdrop-blur-xs bg-black bg-opacity-25'>
        <h4 className='text-white text-lg'>{name}</h4>
        <div className='flex items-center space-x-1'>
          <Location className='w-5 h-5 fill-white' />
          <p className='text-white opacity-75 text-sm'>
            {city}, {country}
          </p>
        </div>
      </div>
      <div className='absolute w-12 h-8 top-4 right-4 p-1 space-x-1 flex items-center justify-center rounded-lg backdrop-blur-xs bg-black bg-opacity-25'>
        <p className='text-white text-xs'>{difficulty}</p>
        <Lightning className='w-3 h-3 fill-white' />
      </div>
    </div>
  )
}

export default LocationCard
