import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import { FiPlus } from "react-icons/fi";
import CategoryCard from "../components/CategoryCard";
import CreateCategory from "../components/CreateCategory";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UpdateCategory from "../components/UpdateCategory";

const SERVER_URL = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const [isAddCategoryClicked, setIsAddCategoryClicked] = useState(false);
  const [categories, setCategories] = useState([]);
  const [editCategory, setEditCategory] = useState(null);
  const [isEditCategoryClicked, setIsEditCategoryClicked] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const getAllCategories = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getAllCategories();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="w-full p-2 bg-neutral-50 flex items-center justify-center">
      <div className="md:w-[20%]">
        <Sidebar />
      </div>
      <div className="w-full md:w-[80%] h-screen bg-white rounded-t-2xl border border-neutral-200 shadow-xs p-2">
        <DashboardHeader />

        {isAddCategoryClicked ? (
          <CreateCategory />
        ) : isEditCategoryClicked ? (
          <UpdateCategory category={editCategory} />
        ) : (
          <div className="mt-5 px-2.5">
            <div className="w-full flex items-center justify-between">
              <h4>Categories</h4>
              <div
                className="bg-orange-600 py-2.5 px-5 rounded-lg shadow-sm flex items-center  justify-center gap-1 cursor-pointer"
                onClick={() => setIsAddCategoryClicked(true)}
              >
                <FiPlus className="text-white" />
                <span className="text-xs text-white">Add Category</span>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {categories &&
                categories.map((category, index) => (
                  <div key={index}>
                    <CategoryCard
                      category={category}
                      onEditClick={(category) => {
                        setEditCategory(category);
                        setIsEditCategoryClicked(true);
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
