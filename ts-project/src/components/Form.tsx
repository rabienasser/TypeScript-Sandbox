import React, {useState} from 'react'
import { InterfaceState as Props } from '../App'

interface InterfaceProps {
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<{
        name: string;
        age: number;
        url: string;
        note?: string | undefined;
    }[]>>
}

const Form = ({people, setPeople}: InterfaceProps) => {
    const [input, setInput] = useState({
        name: '',
        age: '',
        img: '',
        note: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if(!input.name || !input.age || !input.img) {
            return
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: +input.age,
                url: input.img,
                note: input.note,
            }
        ])

        setInput({
            name: '',
            age: '',
            img: '',
            note: '',
        })
    }

    return (
        <div className='AddToList'>
            <input 
            type="text"
            placeholder='Name'
            className='AddToList-input'
            value={input.name}
            onChange={handleChange}
            name='name'
            />
            <input 
            type="text"
            placeholder='Age'
            className='AddToList-input'
            value={input.age}
            onChange={handleChange}
            name='age'
            />
            <input 
            type="text"
            placeholder='Image Url'
            className='AddToList-input'
            value={input.img}
            onChange={handleChange}
            name='img'
            />
            <textarea 
            placeholder='Note'
            className='AddToList-input'
            value={input.note}
            onChange={handleChange}
            name='note'
            />
            <button onClick={handleClick} className='AddToList-btn'>Add To List</button>
        </div>
    )
}

export default Form