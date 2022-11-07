import { defaultImageUrl } from '@/utils/profileImage'

interface ProfileProps {
  name?: string
  id?: string
  imageUrl?: string
}

const Profile: React.FC<ProfileProps> = ({ name, imageUrl, id }) => {
  return (
    <div className='flex items-center gap-4 float-right'>
      <div className='h-10 w-10 rounded-lg overflow-hidden border border-transparent ring-2 ring-highlight'>
        <img alt='Profile Image' src={imageUrl ?? defaultImageUrl(name, id)} />
      </div>
      <p>{name}</p>
    </div>
  )
}

export default Profile
