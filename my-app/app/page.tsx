'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [items, setItems] = useState<Array<any>>()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  
  const getItems = async () => {
    const { data } = await axios.get('http://localhost:3000')
    setItems(data)
  }

  useEffect(() => {
    getItems()
  },[])

  const handleOnChangeFormName = (e) => {
    const value = e.target.value
    setName(value)
  }

  const handleOnChangeFormDescription = (e) => {
    const value = e.target.value
    setDescription(value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      name, description
    }
    await axios.post('http://localhost:3000', payload)
    getItems()
  }

  const deleteItem = async (id: any) => {
    await axios.delete(`http://localhost:3000/${id}`)
    getItems()
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <p>Add</p>
          <p>Name</p>
          <input name='name' value={name} onChange={handleOnChangeFormName} />

          <p>Description</p>
          <input name='description' value={description} onChange={handleOnChangeFormDescription} />

          <a onClick={onSubmit}>Submit</a>
        </div>

        <p>List</p>
        <ul>
          {items?.map(item => {
            const {id, name, description } = item 
            return <li key={id}>Item Id: {id} - Item Name: {name} - Item Description: {description} <a onClick={() => deleteItem(id)}>Delete</a></li>
          })}
        </ul>
      </main>
    </div>
  );
}
