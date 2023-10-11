import { X2jOptions, XMLParser } from 'fast-xml-parser'
import { xmlValidator } from '../Validators/xmlValidator'
import { Codes } from '../Validators/dictionary'
import { XML } from '../Types/types'
type Result={
    code: number
    data: any
    error: any
}
export const ValidatorService = async (xml: string): Promise<Result> => {
  const options: Partial<X2jOptions> = {
    ignoreAttributes: false,
    numberParseOptions: {
      leadingZeros: false,
      hex: false
    }
  }
  const parser = new XMLParser(options)
  try {
    const json: XML = parser.parse(xml)
    const result = await xmlValidator.validate(json, { abortEarly: false })
    return {
      code: Codes.ok,
      data: result,
      error: null
    }
  } catch (err) {
    return {
      code: Codes.error,
      data: err,
      error: err
    }
  }
}
