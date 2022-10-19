import type { NextPage } from 'next'
import { withAuth } from '@/HOCs/auth'
import { useAuthStore } from '@/services/store/auth'
import { Button, Typography } from '@material-tailwind/react'
import Image from 'next/image'
import HeroPic from '@/assets/images/home/image-1.jpeg'
import Link from 'next/link'

const Home: NextPage = () => {
  const { user } = useAuthStore<any>((state) => ({
    user: state.user,
  }))

  return (
    <>
      <Typography className='font-semibold'>Hey, {user.firstName}!</Typography>
      <Typography variant='h2' className='font-semibold'>
        Ready for your next climbing adventure?
      </Typography>
      <div className='h-96 relative mt-4 rounded-md overflow-hidden'>
        <Image alt='Person doing Rock Climbing' layout='fill' objectFit='cover' src={HeroPic} />
        <div className='absolute top-1/2 -translate-y-1/2 left-12'>
          <Typography variant='h3' className='text-white w-3/5 md:mb-0 mb-4'>
            Discover all the hidden places to climb around you!
          </Typography>
          <Typography variant='paragraph' className='text-white mb-4 w-3/5 hidden md:block'>
            Discover and schedule in a matter of minutes all of your climbing adventures.
          </Typography>
          <Button color='white' className='text-stroke'>
            <Link href='/discover'>
              <a>Discover now</a>
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default withAuth(Home)
