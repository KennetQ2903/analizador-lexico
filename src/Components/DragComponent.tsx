import { useState, DragEvent, useEffect } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import '../Styles/DragComponent.css'
import { Loader } from './Loader'
import { ValidatorService } from '../Services/validatorService'
export const DragComponent = () => {
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState(null)

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

  useEffect(() => {
    if (file) {
      const validator = async () => await ValidatorService(file)
      validator()
    }
  }, [file])

  if (loading) {
    return <Loader />
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
