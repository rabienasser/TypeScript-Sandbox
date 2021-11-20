import React from 'react'
import { InterfaceState as InterfaceProps } from '../App'

const List = ({ people }: InterfaceProps) => {
    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
            <li className='List' key={person.url}>
                <div className='List-header'>
                    <img className='List-img' src={person.url} alt={person.name} />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className='List-note'>{person.note}</p>
            </li>
            )
        })
    }

    return(
        <ul>
            {renderList()}
        </ul>
    )
}

export default List