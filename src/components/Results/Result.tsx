import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'

const Result = () => {
    const score = useSelector((state : RootState) => state.score.score);
  return (
    <div>
      Total Score = {score}
    </div>
  )
}

export default Result
