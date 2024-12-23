import React from 'react'
import { auth, provider } from '../firebase'

const LogOut = () => {

  const logout = ()=>{
    localStorage.clear()
    // window.location.reload()
  }

  const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
  }

  const signOut=()=>{
    signOut(auth)
  }

  return (
    <button onClick={()=>auth.signOut()} className={style.button}>LogOut</button>
  )
}

export default LogOut