import React from 'react'

const Card = (props) => {
    console.log(props);

    return (
        <div className='card'>
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor sit. Age: {props.age}</p></div>
    )
}

export default Card