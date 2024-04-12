import React from 'react'


const Cards = ({ title, content }) => {
    return (
        <div className='cards'>
            <h3>{title}</h3>
            <div>  <p>{content}</p></div>

        </div>
    )
}

export default Cards
