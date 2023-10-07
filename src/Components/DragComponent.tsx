import { useState, DragEvent } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import '../Styles/DragComponent.css'
import { Loader } from './Loader'
export const DragComponent = () => {
  const [file, setFile] = useState<string>(null)

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const content = await e.dataTransfer.files[0].text()
    setFile(content)
  }
  if (file) {
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
        <p>Arrastra y suelta archivos aquí</p>
      </div>
    </div>
  )
}
