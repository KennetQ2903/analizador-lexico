import { X2jOptions, XMLParser } from 'fast-xml-parser'
import { xmlValidator } from '../Validators/xmlValidator'
import { Codes } from '../Validators/dictionary'
import { ValidationResponse, XML } from '../Types/types'

type Result={
    code: number
    data: ValidationResponse
    error: any
}

const alwaysArray = [
  'XML.PERSONA'
]

export const ValidatorService = async (xml: string): Promise<Result> => {
  const options: Partial<X2jOptions> = {
    ignoreAttributes: false,
    numberParseOptions: {
      leadingZeros: false,
      hex: false
    },
    isArray: (_name, jpath, _isLeafNode, _isAttribute) => {
      if (alwaysArray.indexOf(jpath) !== -1) return true
    }
  }
  const parser = new XMLParser(options)
  try {
    const json: XML = parser.parse(xml)
    // @ts-ignore
    const result: ValidationResponse = await xmlValidator.validate(json, { abortEarly: false })
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
