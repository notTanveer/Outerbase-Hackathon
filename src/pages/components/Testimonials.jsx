import React from 'react'
import "./Testimonials.scss"

const Testimonials = ({name, image, text}) => {
  return (
    <div className='testimonials-card'>
        {image && <image className="avatar" src={image} alt={`${name}'s avatar`}></image>}
        <p className='name'>{name}</p>
        <p className='text'>{text}</p>

    </div>
  )
}

export default Testimonials