import React, { useEffect, useState } from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../firebase'
import { signInWithRedirect, signInWithPopup } from 'firebase/auth'


const SignIn = () => {

  const style = {
    wrapper: `flex justify-center`
  }

  const [value,setValue] = useState('')
  const googleSignIn = () => {
    signInWithPopup(auth, provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
    })
  }

  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  })

  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSignIn} />
    </div>
  )
}

export default SignIn