import check from 'Animations/check.json'
import error from 'Animations/error.json'
import { ValidationResponse } from 'Types/types'
import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'
import { Dashboard } from './Dashboard'

interface Props {
  result: ValidationResponse
  reset: () => void

}

const ErrorReport = () => {
  return (
    <Lottie
      animationData={error} loop style={{
        width: 250
      }}
    />
  )
}

const SuccessReport = () => {
  return (
    <Lottie
      animationData={check} loop style={{
        width: 250
      }}
    />
  )
}
export const Analizer = ({ result, reset }: Props) => {
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (result?.errors?.length > 0) {
      setSuccess(false)
      setError(true)
      setTimeout(() => setError(false), 1000)
    } else {
      setSuccess(true)
      setError(false)
      setTimeout(() => setSuccess(false), 1000)
    }
  }, [result?.errors?.length])

  if (error) {
    return <ErrorReport />
  }

  if (success) {
    return (
      <SuccessReport />
    )
  }

  return (
    <Dashboard result={result} reset={reset} />
  )
}
