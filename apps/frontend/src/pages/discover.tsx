import LocationCard from '@/components/discover/locationCard'
import { useGetAllLocationsQuery } from '@/graphql/schema'
import { withAuth } from '@/HOCs/auth'
import { NextPage } from 'next'

const Discover: NextPage = () => {
  const { data, loading } = useGetAllLocationsQuery()

  if (loading) return <p>Loading...</p>

  return (
    <div className='grid grid-cols-12 gap-6'>
      <div className='col-span-6 lg:col-span-8'>
        {data && data.locations.map((location) => <LocationCard key={location.id} {...location} />)}
      </div>
    </div>
  )
}

export default withAuth(Discover)
