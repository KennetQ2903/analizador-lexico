import { useState, DragEvent } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import 'Styles/DragComponent.css'
import { Loader } from './Loader'
import { useValidateXml } from 'Hooks/useValidateXml'
import { Analizer } from './Analizer'

export const DragComponent = () => {
  const { result, setFile } = useValidateXml()
  const [loading, setLoading] = useState(false)

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    setLoading(true)
    e.preventDefault()
    const content = await e.dataTransfer.files[0].text()
    setTimeout(() => {
      setLoading(false)
      setFile(content)
    }, 5000)
  }

  if (loading && !result) {
    return <Loader />
  }

  if (!loading && result) {
    return <Analizer result={result} />
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className='input'
    >
      <div>
        <IoAddCircleOutline style={{ verticalAlign: 'middle', fontSize: 100 }} />
        <p>Suelta tu archivo aquí</p>
      </div>
    </div>
  )
}
