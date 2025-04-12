import React from 'react'
import { FiEdit } from 'react-icons/fi';

const SERVER_URL = import.meta.env.VITE_API_URL;

const CategoryCard = ({ category, onEditClick }) => {
  return (
    <div className='w-full border p-2 rounded-lg border-neutral-200'>
        <img src={`${SERVER_URL}/${category.image}`} alt="" className='w-full md:w-80 h-60 object-cover rounded-md' />
        <div className="ml-2.5 flex items-center justify-between">
        <div>
        <h4 className='mt-2 font-medium'>{category.name}</h4>
        <h5 className='text-gray-500 text-sm'>{category.itemCount} items</h5>
        </div>
        <FiEdit size={18} className='cursor-pointer' onClick={() => onEditClick(category)} />
        </div>
    </div>
  )
}

export default CategoryCard