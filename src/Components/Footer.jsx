import React from 'react'

const Footer = (props) => {
  return (
    <div>
      <div className={`bg-${props.bgCol} text-${props.text1} p-2 text-center`}>
        <h2 className='text-md font-medium '>Made By Shreyash Dhulrao</h2>
        <h2 className='text-sm'>React js, Tailwind CSS, Vite</h2>
      </div>
    </div>
  )
}

export default Footer
