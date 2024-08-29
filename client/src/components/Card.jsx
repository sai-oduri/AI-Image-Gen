import React from 'react'

import { download } from '../assets'
import { downloadImage } from '../utils'

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className='rounded-xl flex items-center group relative shadow-card hover:shadow-cardhover card'>
      <img
        className='w-full h-auto object-contain rounded-xl'
        src={photo} alt={prompt}
      />

      {/* <div className='group-hover:flex flex-col max-h-[90%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'> */}
      <div className='transition duration-300 group-hover:opacity-100 flex flex-col max-h-[90%] opacity-0 absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
        <p className='text-white text-md overflow-y-auto'>{prompt}</p>
        <div className='mt-5 flex justify-between items-center gap-2'>
          <div className='flex items-center gap-2'>
            <div className='w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold' >{name[0]}</div>
            <p className='text-white text-sm'>{name}</p>
          </div>
          <button className='outline-none bg-transparent border-none' type='button' onClick={() => downloadImage(_id, photo)}>
            <img src={download} alt="Download" className='w-6 h-6 object-contain invert' />
          </button>
        </div>
      </div>

    </div>
  )
}

export default Card