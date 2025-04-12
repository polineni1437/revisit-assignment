import React from 'react'
import { FiBox } from 'react-icons/fi'
import { LuHouse, LuShoppingCart } from 'react-icons/lu'

const Sidebar = () => {
  return (
    <div className='w-[20%] hidden md:block h-screen fixed top-0 left-0 overflow-hidden bg-neutral-50 p-5'>
        <div className='w-full flex items-center justify-start gap-2 cursor-pointer'>
          <div className='bg-orange-500 p-2 rounded-lg w-10'>
            <LuShoppingCart size={20} className='text-white' />
          </div>
          <h1 className='text-lg font-semibold'>FastCart</h1>
        </div>
        <div className="mt-5">
          <h4 className='text-gray-500 text-sm'>General Menu</h4>
          <div className='mt-5 space-y-5'>
            <div className="flex items-center gap-2 cursor-pointer bg-white p-2 rounded-lg border border-neutral-200">
              <FiBox className='' size={18} />
              <span>Category</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar