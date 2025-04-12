import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { LuChevronsUpDown } from "react-icons/lu";
import { FiBox } from "react-icons/fi";

const DashboardHeader = () => {
    const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  return (
    <div className='w-full flex items-center justify-between bg-neutral-50 py-3 px-5 rounded-xl border border-neutral-200'>
                <div className='flex items-center justify-center gap-2'>
                    <FiBox size={22} />
                    <h3 className='text-md font-medium'>Category</h3>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <div className="hidden md:flex items-center justify-center gap-2">
                    <div className="flex items-center justify-center gap-2 border border-neutral-200 p-1 rounded-lg px-2">
                        <IoIosSearch />
                        <input type="text" className='outline-none text-xs py-1' placeholder='Search' />
                    </div>
                    <div className='border p-2 rounded-lg border-neutral-200 cursor-pointer'>
                        <GoBell />
                    </div>
                    </div>

                    <div className='bg-white rounded-lg border border-neutral-200 p-1 flex items-center justify-center gap-2 cursor-pointer'>
                        <div>
                            <img src="https://marketplace.canva.com/EAE_5BLs0Ts/1/0/1600w/canva-pastel-purple-mustard-white-simple-professional-employment-linkedin-profile-picture-HBwnRqn0b34.jpg" alt="" className='w-8 rounded-md' />
                        </div>
                        <div>
                        <h4 className='text-xs'>{name}</h4>
                        <p className='text-xs'>{email}</p>
                        </div>
                        <LuChevronsUpDown/>
                    </div>
                </div>
            </div>
  )
}

export default DashboardHeader