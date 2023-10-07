import { useState, DragEvent } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import '../Styles/DragComponent.css'
import { Loader } from './Loader'
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
    setLoading(false)
    setFile(content)
  }

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
