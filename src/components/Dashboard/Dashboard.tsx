import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'

const Dashboard = () => {
  const currentUserEmail = useSelector((state : RootState) => state.user.email);
  const currentUserUid = useSelector((state : RootState) => state.user.uid); 
  return (
    <div>
      Welcome 
      Your userId : {currentUserUid};
      Your email : {currentUserEmail}
    </div>
  )
}

export default Dashboard
