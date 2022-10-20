import { FormEvent, useState } from 'react'
import type { NextPage } from 'next'
import { useAuthStore } from '@/services/store/auth'
import { useRouter } from 'next/router'
import { withoutAuth } from '@/HOCs/auth'
import { useLoginMutation } from '@/graphql/schema'
import { Button } from 'component-library'

const Login: NextPage = () => {
  // React state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const store = useAuthStore()
  const router = useRouter()
  const [loginMutation, { error }] = useLoginMutation({
    variables: {
      input: {
        email,
        password,
      },
    },
  })

  const submit = async (e: FormEvent) => {
    e.preventDefault()

    const { data } = await loginMutation()

    if (error) {
      console.error(error)
      return
    }

    if (data) {
      store.setUser(data.user)
      router.push('/')
    }
  }

  return (
    <>
      <form onSubmit={submit} className='h-full w-1/2 m-auto flex flex-col items-center justify-center space-y-5'>
        <input
          placeholder='Your email address'
          type='email'
          name='email'
          autoComplete='email'
          className='input w-full'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder='Your account password'
          type='password'
          name='password'
          autoComplete='password'
          className='input w-full'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='submit' color='red'>
          Login
        </Button>
      </form>
    </>
  )
}

export default withoutAuth(Login)
