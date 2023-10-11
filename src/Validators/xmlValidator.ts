import * as yup from 'yup'
import { emailRegex, nameRegex, phoneRegex } from './dictionary'
import { XML } from '../Types/types'

export const xmlValidator: yup.ObjectSchema<XML> = yup.object().shape({
  XML: yup.object().shape({
    PERSONA: yup.array().of(yup.object().shape({
      NOMBRE: yup
        .string()
        .required('El nodo NOMBRE es obligatorio')
        .matches(nameRegex, {
          excludeEmptyString: true,
          message: 'EL nombre de la persona no es valido'
        }),
      TELEFONO: yup
        .string()
        .required('El nodo TELEFONO es obligatorio')
        .matches(phoneRegex, {
          excludeEmptyString: true,
          message: 'EL telefono de la persona no es valido'
        }),
      CORREO: yup
        .string()
        .required('El nodo CORREO es obligatorio')
        .matches(emailRegex, {
          excludeEmptyString: true,
          message: 'EL correo de la persona no es valido'
        })
    })).required('El nodo PERSONA es obligatorio')
  }).required('El archivo XML no es valido, nodo raiz invalido')
})
