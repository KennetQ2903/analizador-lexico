import 'Styles/Dashboard.css'
import { ValidationResponse } from 'Types/types'
import { IoMailOpenOutline, IoIdCardOutline, IoCallOutline, IoGitBranchOutline, IoAlertCircleOutline } from 'react-icons/io5'

interface Props {
  result: ValidationResponse
  reset: () => void
}

const dataStyle = {
  fontSize: '3rem'
}

const subtitleStyle = {
  fontSize: '1rem'
}

const iconStyle = {
  verticalAlign: 'middle',
  fontSize: 80
}

export const Dashboard = ({ result, reset }: Props) => {
  const validStructure = Object.keys(result?.value?.XML || {})?.length
  const invalidNodes = result?.errors?.some(e => e.includes('El nodo PERSONA es obligatorio'))
  // @ts-ignore
  const totalNodesAnalized = result?.value?.XML?.PERSONA?.length || result?.XML?.PERSONA?.length || 0
  // @ts-ignore
  const nodes = [result?.value?.XML?.PERSONA || result?.XML?.PERSONA].flat()

  const totalEmails = nodes.map(i => i ? Object.keys(i) : null)?.flat()?.filter(e => e === 'CORREO')?.length ?? 0
  const totalNames = nodes.map(i => i ? Object.keys(i) : null)?.flat()?.filter(e => e === 'NOMBRE')?.length ?? 0
  const totalPhones = nodes.map(i => i ? Object.keys(i) : null)?.flat()?.filter(e => e === 'TELEFONO')?.length ?? 0

  const totalErrorsEmails = result?.inner?.filter(e => e.path.includes('CORREO'))?.length ?? 0
  const totalErrorsNames = result?.inner?.filter(e => e.path.includes('NOMBRE'))?.length ?? 0
  const totalErrorsPhones = result?.inner?.filter(e => e.path.includes('TELEFONO'))?.length ?? 0

  const totalOkEmails = totalEmails - totalErrorsEmails
  const totalOkNames = totalNames - totalErrorsNames
  const totalOkPhones = totalPhones - totalErrorsPhones

  if (!validStructure || invalidNodes) {
    return (
      <div className='contenedor'>
        <div className='firstElement'>
          <div className='container-data'>
            <div className='data'>
              <span style={{ fontSize: '2rem' }}>XML invalido</span>
            </div>
            <IoAlertCircleOutline style={{
              verticalAlign: 'middle',
              fontSize: 120
            }}
            />
          </div>
        </div>
        <button className='button-container' onClick={reset}>
          <span>OK</span>
        </button>
      </div>
    )
  }

  return (
    <div className='contenedor'>
      <div className='firstElement'>
        <div className='container-data'>
          <div className='data'>
            <span style={{ fontSize: '4rem' }}>{totalNodesAnalized}</span>
            <span style={{ fontSize: '2rem' }}>Nodos analizados</span>
          </div>
          <IoGitBranchOutline style={{
            verticalAlign: 'middle',
            fontSize: 120
          }}
          />
        </div>
      </div>
      <div className='contenedor-flex'>
        <div className='error-element'>
          <div className='container-data'>
            <div className='data'>
              <span style={dataStyle}>{totalErrorsEmails}</span>
              <span style={subtitleStyle}>Correos invalidos</span>
            </div>
            <IoMailOpenOutline style={iconStyle} />
          </div>
        </div>
        <div className='success-element'>
          <div className='container-data'>
            <div className='data'>
              <span style={dataStyle}>{totalOkEmails}</span>
              <span style={subtitleStyle}>Correos validos</span>
            </div>
            <IoMailOpenOutline style={iconStyle} />
          </div>
        </div>
        <div className='error-element'>
          <div className='container-data'>
            <div className='data'>
              <span style={dataStyle}>{totalErrorsNames}</span>
              <span style={subtitleStyle}>Nombres invalidos</span>
            </div>
            <IoIdCardOutline style={iconStyle} />
          </div>
        </div>
        <div className='success-element'>
          <div className='container-data'>
            <div className='data'>
              <span style={dataStyle}>{totalOkNames}</span>
              <span style={subtitleStyle}>Nombres validos</span>
            </div>
            <IoIdCardOutline style={iconStyle} />
          </div>
        </div>
        <div className='error-element'>
          <div className='container-data'>
            <div className='data'>
              <span style={dataStyle}>{totalErrorsPhones}</span>
              <span style={subtitleStyle}>Telefonos invalidos</span>
            </div>
            <IoCallOutline style={iconStyle} />
          </div>
        </div>
        <div className='success-element'>
          <div className='container-data'>
            <div className='data'>
              <span style={dataStyle}>{totalOkPhones}</span>
              <span style={subtitleStyle}>Telefonos validos</span>
            </div>
            <IoCallOutline style={iconStyle} />
          </div>
        </div>
      </div>
      <button className='button-container' onClick={reset}>
        <span>OK</span>
      </button>
    </div>
  )
}
