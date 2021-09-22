import React, { useEffect, useState } from 'react'
import { GrAdd } from "react-icons/gr";
import {FaEdit, FaTrash } from 'react-icons/fa'
import {BsPencilSquare} from 'react-icons/bs'

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if(list){
      return (list = JSON.parse(localStorage.getItem('list')));
    }
    else{
      return []
    }
  }

function MakeNote() {
    const [input, setInput] = useState('')
    const [list, setList] = useState(getLocalStorage)
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    const addNotes = () => {
        if(!input){
            return null
        }
        else if(input && isEditing){
            setList(
                list.map((item) => {
                    if(item.id === editId){
                        return {...item, text: input}
                    }
                    else{
                        return item
                    }
                }))
                setInput('')
                setIsEditing(false)
                setEditId(null)
        }
        else{
        const newItem = {
            id: Date.now(),
            text: input
        }
        setList([...list, newItem])
        setInput('')
    }
}
    const deleteItem = (id) => {
        setList(list.filter((item) => item.id !== id))
    }
    const editItem =(id) => {
        const specificItem = list.find((item) => item.id === id)
        setInput(specificItem.text)
        setIsEditing(true)
        setEditId(id)
    }
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])
    return (
        <div className='make-note'>
            <h2>Make Note</h2>
            <input
            className='notes'
            type='text'
            value={input} 
            onChange= {(e) => setInput(e.target.value)}
            />
            <button 
            className='submit' 
            onClick={addNotes}>
            {isEditing ? <BsPencilSquare /> : <GrAdd />}
            </button>
            <div>
                <ul>
                    {list.map((item) => {
                        const {id, text} = item;
                        return(
                        <div key={id}>
                            <div className='list'>
                            <p>{text}</p>
                            </div>
                            <div className='list-button-container'>
                            <button className='list-button' onClick={() => deleteItem(id)}><FaTrash /> </button>
                            <button className='list-button' onClick={() => editItem(id)}><FaEdit /></button>
                            </div>
                        </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default MakeNote