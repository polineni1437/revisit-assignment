import React, { useState } from 'react'
import { LuImageUp } from 'react-icons/lu'
import axios from "axios"

const SERVER_URL = import.meta.env.VITE_API_URL;

const CreateCategory = () => {
    const [name, setName] = useState('');
    const [itemCount, setItemCount] = useState();
    const [file, setFile] = useState(null);
    const token = localStorage.getItem("token");
    
      const handleAddCategory = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('itemCount', itemCount);
        formData.append('image', file);
        try {
            const response = await axios.post(`${SERVER_URL}/api/categories`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response.data);
            window.location.reload();
        } catch (error) {
            console.log(error.response ? error.response.data : error.message);
        }
      }
  return (
    <div className="mt-5 p-2.5 border border-neutral-200 rounded-xl">
            <h4 className="text-lg font-medium">Create Category</h4>
            <p className="text-gray-500 text-xs">
              Launch your categories and products with ease and efficiency
            </p>
            <div className="flex items-center justify-center">
              <form onSubmit={handleAddCategory} className="mt-5 space-y-5 w-full md:w-[50%] flex flex-col items-start justify-center">
                <div className="w-full">
                  <h4 className="text-sm">Category Name</h4>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full px-2.5 py-3 rounded-lg border border-neutral-200 text-xs mt-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <h4 className="text-sm">Item Count</h4>
                  <input
                    type="number"
                    className="w-full px-2.5 py-3 rounded-lg border border-neutral-200 text-xs mt-2"
                    value={itemCount}
                    onChange={(e) => setItemCount(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <input
                    type="file"
                    name="file"
                    id="file-upload"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="hidden"
                  />

                  <label
                    htmlFor="file-upload"
                    className="w-full h-full cursor-pointer border-2 border-dashed rounded-2xl flex flex-col items-center justify-center px-4 py-6"
                  >
                    {file ? (
                        <div className="w-full flex flex-col items-center justify-center">
                            <div className="w-full flex items-center justify-center">
                      <img src={URL.createObjectURL(file)}  alt="" className="w-full h-80 object-cover object-center" />
                    </div>
                      <span className="text-orange-500 mt-2">Change Photo</span>
                        </div>
                    ): (
                        <div  className="flex flex-col items-center justify-center">
                        <LuImageUp size={30} />
                    <h3 className="text-sm md:text-md my-5">
                      Upload your image here or{" "}
                      <span className="text-orange-500 text-sm">browse</span>
                    </h3></div>
                    )}
                  </label>
                </div>

                <button type="submit" className="w-full py-2.5 bg-orange-600 text-white rounded-lg text-sm shadow-sm cursor-pointer">Add Category</button>
              </form>
            </div>
          </div>
  )
}

export default CreateCategory