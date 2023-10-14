import { ValidatorService } from 'Services/ValidatorService'
import { ValidationResponse } from 'Types/types'
import { useCallback, useEffect, useState } from 'react'

export const useValidateXml = () => {
  const [result, setResult] = useState<ValidationResponse>(null)
  const [file, setFile] = useState(null)

  const validateXml = useCallback(async () => {
    const response = await ValidatorService(file)
    setResult(response.data)
  }, [file])

  useEffect(() => {
    if (file) {
      const validator = async () => await validateXml()
      validator()
    }
  }, [file, validateXml])

  return {
    result,
    setFile
  }
}
