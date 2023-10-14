import check from 'Animations/check.json'
import error from 'Animations/error.json'
import { ValidationResponse } from 'Types/types'
import Lottie from 'lottie-react'

interface Props {
    result: ValidationResponse
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
export const Analizer = ({ result }: Props) => {
  console.log(JSON.stringify(result))

  if (result?.errors?.length > 0) {
    return (
      <ErrorReport />
    )
  }

  return (
    <SuccessReport />
  )
}
